import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Input from '../Input';
import { FormContainer } from './styled';

import EmailKeys from '../../utils/emailjs';
import validate from '../../utils/validate';

const initialState = {
  name: '',
  email: '',
  message: '',
};

emailjs.init('5no1tMFXGOvvszz6s');
function FormContact({ cb }) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = ({ target: { name, value } }) => {
    setInputs((old) => ({ ...old, [name]: value }));
  };

  const handleSuccess = (res) => {
    cb({ isLoading: false, success: true, res, wasSend: true });
    setInputs(initialState);
  };
  const handleError = (res) => {
    cb({ isLading: false, success: false, res, wasSend: true });
    setInputs(initialState);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    Object.entries(([key, value]) => {
      const v = validate({ key, value });
      // if (v && !v.isValid) console.log(v.message);
    });

    cb({ isLoading: true, wasSend: false });
    setTimeout(
      () => (Math.round(Math.random()) ? handleSuccess() : handleError()),
      5 * 1000,
    );

    /*
     emailjs
      .send(EmailKeys.ID, EmailKeys.TEMPLATE, {
        full_name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      })
      .then(handleSuccess)
      .catch(handleError);
    */
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <div className="inline">
        <Input
          onChange={onChange}
          value={inputs.name}
          name="name"
          placeholder="Your Name"
          type="text"
        />

        <Input
          onChange={onChange}
          value={inputs.email}
          name="email"
          placeholder="Your Email"
          type="text"
        />
      </div>

      <Input
        onChange={onChange}
        value={inputs.message}
        name="message"
        placeholder="Type your message here"
        as="textarea"
      />

      <button type="submit">Send message</button>
    </FormContainer>
  );
}

export default FormContact;
