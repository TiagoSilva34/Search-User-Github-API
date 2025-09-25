export interface IButtonProps {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string
}
