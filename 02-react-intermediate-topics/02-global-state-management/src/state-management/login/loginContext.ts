import React from "react";
import { AuthAction } from "./LoginProvider";

interface LoginContextType {
    username: string;
    dispatch: React.Dispatch<AuthAction>;
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);

export default LoginContext;