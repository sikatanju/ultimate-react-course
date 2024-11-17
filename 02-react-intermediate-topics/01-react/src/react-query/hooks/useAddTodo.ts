import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/api-client";
import Todoservice, { Todo } from "../services/Todoservice";

interface AddTodoContext {
  previousTodo: Todo[];
}

const apiClinet = new APIClient<Todo>("/todosx ");

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    // mutationFn: (todo: Todo) => apiClinet.post(todo),
    mutationFn: Todoservice.post,
    // axios
    //   .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
    //   .then((res) => res.data),

    onMutate: (newTodo: Todo) => {
      const previousTodo =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);
      onAdd();
      return { previousTodo };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      queryClient.setQueryData(CACHE_KEY_TODOS, context?.previousTodo);
    },
  });
};

export default useAddTodo;
