import React, { Children, ReactNode, useState } from "react";
interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
    let currentText = "";
    if (children.length < maxChars) return <p>{children}</p>;
    // for (let i = 0; i < maxChars; i++) {
    //     currentText += children.charAt(i);
    // }

    const [isExpanded, setExpanded] = useState(false);
    const text = isExpanded ? children : children.substring(0, maxChars);

    // console.log(children);

    return (
        <p>
            {text}...
            <button
                onClick={() =>
                    isExpanded ? setExpanded(false) : setExpanded(true)
                }
            >
                {isExpanded ? "Less" : "More"}
            </button>
        </p>
    );
};

export default ExpandableText;
