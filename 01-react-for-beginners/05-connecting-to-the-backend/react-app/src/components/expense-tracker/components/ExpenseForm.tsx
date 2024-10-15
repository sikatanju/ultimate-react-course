import React from "react";
import { useForm } from "react-hook-form";

import { categories } from "../../../App";

interface Props {
    expenseForm: (ob: any) => void;
}

const ExpenseForm = ({ expenseForm }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data: any) => {
        expenseForm(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    {...register("description", { required: true })}
                    id="description"
                    type="text"
                    className="form-control"
                />
                {errors.description?.type === "required" && (
                    <p className="text-danger">Description is required</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register("amount", { required: true })}
                    id="amount"
                    type="number"
                    className="form-control"
                />
                {errors.amount?.type === "required" && (
                    <p className="text-danger">Amount is required</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    {...register("category", { required: true })}
                    id="category"
                    className="form-control"
                >
                    <option value=""></option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                {errors.category?.type === "required" && (
                    <p className="text-danger">Category is required</p>
                )}
            </div>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
};

export default ExpenseForm;
