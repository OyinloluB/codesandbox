import { Input } from "./styles";

export type InputFieldProps = {
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
};

const InputField = ({
  handleChange,
  value,
  placeholder,
  type,
}: InputFieldProps) => {
  return (
    <Input
      onChange={(e) => handleChange(e)}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputField;
