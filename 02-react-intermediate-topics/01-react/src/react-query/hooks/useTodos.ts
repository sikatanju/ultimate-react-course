import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/api-client";
import Todoservice, { Todo } from "../services/Todoservice";

function useTodos() {
  // const fetchTodos = () =>
  //   axios
  //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.data);
  const apiClient = new APIClient<Todo>("/todos");

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: Todoservice.getAll,
    staleTime: 300000,
  });
}

export default useTodos;
