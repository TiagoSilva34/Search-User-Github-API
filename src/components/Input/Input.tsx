import { IInputProps } from "./types";
import styles from "./styles.module.css"

export const Input = ({ type, placeholder, value, onChange }: IInputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};
