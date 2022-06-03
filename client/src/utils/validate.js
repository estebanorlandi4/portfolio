const hasNumbers = /\d/g;

function validateName(value) {
  if (!value.length) return { isValid: false, message: 'Name is required' };
  if (hasNumbers.test(value))
    return { isValid: false, message: 'Only letters' };
  return { isValid: true };
}

const validateFunctions = {
  name: validateName,
};

function validate({ key, value }) {
  const cb = validateFunctions[key];
  if (cb) return cb(value);
  return false;
}

export default validate;
