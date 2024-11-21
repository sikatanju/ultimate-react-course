import { ReactNode, useReducer } from "react";
import TasksContext from "./taskContext";

export interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: "ADD";
    task: Task;
}

interface DeleteTask {
    type: "DELETE";
    taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case "ADD":
            return [action.task, ...state];

        case "DELETE":
            return state.filter((task) => task.id !== action.taskId);
    }
    return state;
};


interface Props {
    children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TaskProvider;
