import React, { ReactNode, useState } from "react";

interface Props {
    expenseList: {
        id: number;
        description: string;
        amount: number;
        category: string;
    }[];
    deleteExpense: (index: number) => void;
}

const ExpenseTrackerList = ({ expenseList, deleteExpense }: Props) => {
    const [category, setCategory] = useState("All Category");

    return (
        <>
            <select
                onChange={(event) => setCategory(event.target.value)}
                className="form-select"
            >
                <option value="All Category">All Category</option>
                <option value="Groceries">Groceries</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
            </select>
            <br />
            <br />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList
                        .filter(
                            (exp) =>
                                exp.category === category ||
                                category === "All Category"
                        )
                        .map((exp) => (
                            <tr>
                                <th>{exp.description}</th>
                                <th>{exp.amount}</th>
                                <th>{exp.category}</th>
                                <th>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteExpense(exp.id)}
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default ExpenseTrackerList;
