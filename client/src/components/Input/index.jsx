import { Label } from './styled';

function Input({ label, as, ...props }) {
  const Type = as ?? 'input';
  return (
    <Label>
      <Type autoComplete="off" {...props} />
    </Label>
  );
}

export default Input;
