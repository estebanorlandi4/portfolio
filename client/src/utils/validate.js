const hasNumbers = /\d/g;

const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function validateName(value) {
  if (!value.length) return { isValid: false, message: 'Name is required' };
  if (hasNumbers.test(value))
    return { isValid: false, message: 'Only letters' };
  return { isValid: true };
}

function validateEmail(value) {
  if (!value.length) return { isValid: false, message: 'Email is required' };
  if (!validEmail.test(value))
    return { isValid: false, message: 'Invalid email format' };
  return { isValid: true };
}

const validateFunctions = {
  name: validateName,
  email: validateEmail,
};

function validate({ key, value }) {
  const cb = validateFunctions[key];
  if (cb) return cb(value);
  return false;
}

export default validate;
