import { Label } from './styled';

function Input({ label, as, ...props }) {
  const Type = as ?? 'input';
  return (
    <Label>
      <Type autocomplete="off" {...props} />
    </Label>
  );
}

export default Input;
