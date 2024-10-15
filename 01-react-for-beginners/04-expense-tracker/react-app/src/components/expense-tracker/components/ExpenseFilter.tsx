import React from "react";

import { categories } from "../../../App";

interface Props {
    onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
    return (
        <select
            className="form-select"
            onChange={(event) => onSelectCategory(event.target.value)}
        >
            <option value="">All Category</option>
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
};

export default ExpenseFilter;
