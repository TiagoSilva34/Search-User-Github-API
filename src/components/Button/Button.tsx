import styles from "./styles.module.css"
import { IButtonProps } from "./types";

export const Button = ({
    children,
    type,
    disabled,
    onClick,
}: IButtonProps) => {
    return (
        <button
            type={type}
            className={disabled ? styles.disabled_btn : styles.enable_btn}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}