interface IButtonProps {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
}

export const Button = ({
    children,
    type
}: IButtonProps) => {
    return (
        <button
            type={type}
            className={''}
        >
            {children}
        </button>
    );
}