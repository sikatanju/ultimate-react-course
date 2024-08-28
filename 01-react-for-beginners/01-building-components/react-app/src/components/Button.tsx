import { Component, ReactNode } from "react";

interface Props {
    button_color?: "primary" | "secondary" | "danger";
    children: ReactNode;
    onClick: () => void;
}

const Button = ({ button_color = "primary", children, onClick }: Props) => {
    return (
        <div>
            <button
                type="button"
                onClick={onClick}
                className={"btn btn-" + button_color}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;

// className={
//     button_type == "primary"
//         ? "btn btn-primary"
//         : "btn btn-secondary"
// }
