import { useContext } from "react";
import TasksContext from "./taskContext";
import useLoginStore from "../login/loginStore";

const useTask = () => useContext(TasksContext);

const TaskList = () => {
    const { tasks, dispatch } = useTask();
    const {username} = useLoginStore();
    return (
        <>
            <p>{username}</p>
            <button
                onClick={() =>
                    dispatch({
                        type: "ADD",
                        task: {
                            id: Date.now(),
                            title: "New Task" + Date.now().toPrecision(),
                        },
                    })
                }
                className="btn btn-primary my-3"
            >
                Add Task
            </button>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span className="flex-grow-1">{task.title}</span>
                        <button
                            className="btn btn-outline-danger"
                            onClick={() =>
                                dispatch({ type: "DELETE", taskId: task.id })
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;
