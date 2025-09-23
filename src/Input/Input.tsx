import { IInputProps } from "./types";

export const Input = ({ type, placeholder, value, onChange }: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
