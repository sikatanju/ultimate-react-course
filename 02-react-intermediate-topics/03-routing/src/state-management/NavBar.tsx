import { useContext } from "react";

import TasksContext from "./tasks/taskContext";
import LoginStatus from "./login/LoginStatus";
import useCounterStore from "./counter/store";

const NavBar = () => {
    console.log("Render Navbar");

    const { tasks } = useContext(TasksContext);
    const counter = useCounterStore(ss => ss.counter);
    return (
        <nav className="navbar d-flex justify-content-between">
            <span className="badge text-bg-secondary">{counter}</span>
            <LoginStatus />
        </nav>
    );
};

export default NavBar;
