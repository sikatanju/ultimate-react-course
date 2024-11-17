import "./App.css";
import HomePage from "./state-management/HomePage";
import { LoginProvider } from "./state-management/login";

import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
    return (
        <LoginProvider>
            <TaskProvider>
                <NavBar />
                <HomePage />
            </TaskProvider>
        </LoginProvider>
    );
}

export default App;
