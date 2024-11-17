import { useContext } from "react";
import LoginContext from "./loginContext";
import useLogin from "./useLogin";


const LoginStatus = () => {
    const { username: user, dispatch } = useLogin();
    if (user)
        return (
            <>
                <div>
                    <span className="mx-2">{user}</span>
                    <a onClick={() => dispatch({ type: "Logout" })} href="#">
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            <a
                onClick={() =>
                    dispatch({ type: "Login", username: "sikatanju" })
                }
                href="#"
            >
                Login
            </a>
        </div>
    );
};

export default LoginStatus;
