import styles from "./styles.module.css"
interface IButtonProps {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({
    children,
    type,
    disabled
}: IButtonProps) => {
    return (
        <button
            type={type}
            className={styles.button}
            disabled={disabled}
        >
            {children}
        </button>
    );
}