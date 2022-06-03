import { Label } from './styled';

function Input({ label, as, error, ...props }) {
  const Type = as ?? 'input';
  return (
    <Label>
      {label}
      <Type autoComplete="off" {...props} />
      {error && <span>{error}</span>}
    </Label>
  );
}

export default Input;
