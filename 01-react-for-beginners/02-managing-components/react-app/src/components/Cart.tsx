import React from "react";

interface Props {
    cartItems: string[];
    clearCart: () => void;
}

const Cart = ({ cartItems, clearCart }: Props) => {
    return (
        <>
            <br />
            <br />
            <div>Cart Items</div>
            <ul>
                {cartItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </>
    );
};

export default Cart;
