import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../Input';
import { FormContainer } from './styled';

import EmailKeys from '../../utils/emailjs';

const initialState = {
  name: { value: '', error: '', isValid: false },
  email: { value: '', error: '', isValid: false },
  message: { value: '', error: '', isValid: false },
};

emailjs.init('5no1tMFXGOvvszz6s');
function FormContact({ cb }) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = ({ target: { name, value } }) => {
    setInputs((old) => ({
      ...old,
      [name]: { ...old[name], value },
    }));
  };

  const handleSuccess = (res) => {
    cb({ isLoading: false, success: true, res, wasSend: true });
    setInputs(initialState);
  };
  const handleError = (res) => {
    cb({ isLading: false, success: false, res, wasSend: true });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !Object.values(inputs)
        .map((input) => input.value)
        .filter((value) => value).length
    )
      return null;

    cb({ isLoading: true, wasSend: false });
    /*
    setTimeout(
      () => (Math.round(Math.random()) ? handleSuccess() : handleError()),
      5 * 1000,
    );
    */

    emailjs
      .send(EmailKeys.ID, EmailKeys.TEMPLATE, {
        full_name: inputs.name.value,
        email: inputs.email.value,
        message: inputs.message.value,
      })
      .then(handleSuccess)
      .catch(handleError);

    return true;
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <div className="inline">
        <Input
          onChange={onChange}
          value={inputs.name.value}
          name="name"
          placeholder="Your Name"
          type="text"
          required
        />

        <Input
          onChange={onChange}
          value={inputs.email.value}
          name="email"
          placeholder="Your Email"
          type="email"
          required
        />
      </div>

      <Input
        onChange={onChange}
        value={inputs.message.value}
        name="message"
        placeholder="Type your message here"
        as="textarea"
        required
      />

      <button type="submit">Send message</button>
    </FormContainer>
  );
}

export default FormContact;
