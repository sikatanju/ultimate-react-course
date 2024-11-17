import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "../services/todoService";
import APIClient from "../services/todoService";

function useTodos() {
    // const fetchTodos = () =>
    //   axios
    //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    //     .then((res) => res.data);
    // const apiClient = new APIClient<Todo>("/todos");

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        queryFn: APIClient.getAll,
        staleTime: 300000,
    });
}

export default useTodos;
