import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./List.module.css";

interface Props {
    onClick: () => void;
}

function Like({ onClick }: Props) {
    const [like, setLike] = useState(false);
    return (
        <>
            <AiFillHeart
                color={like == true ? "blue" : "black"}
                size={40}
                // className={like == true ? "fill" : "void"}
                onClick={() => {
                    like == true ? setLike(false) : setLike(true);
                    console.log("clicked");
                }}
            ></AiFillHeart>
        </>
    );
}

export default Like;
