import React from "react";

interface Props {
    cartItemsCount: number;
}
const Navbar = ({ cartItemsCount }: Props) => {
    return <div>CartCount: {cartItemsCount}</div>;
};

export default Navbar;
