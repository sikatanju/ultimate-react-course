import { ReactNode } from "react";

interface Props {
    // text: string;

    // Using children prop, we can pass children to a component
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
    return (
        <div
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
        >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={onClick}
            ></button>
        </div>
    );
};

export default Alert;
