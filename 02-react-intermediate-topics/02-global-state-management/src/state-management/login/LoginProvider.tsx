import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";


interface LoginAction {
    type: "Login";
    username: string;
}

interface LogoutAction {
    type: "Logout";
}

export type AuthAction = LoginAction | LogoutAction;

const loginReducer = (state: string, action: AuthAction): string => {
    if (action.type === "Login") {
        return action.username;
    }
    if (action.type === "Logout") return "";
    return state;
};

interface Props {
    children: ReactNode;
}

const LoginProvider = ({ children }: Props) => {
    const [username, dispatch] = useReducer(loginReducer, "");

    return (
        <LoginContext.Provider value={{ username, dispatch }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
