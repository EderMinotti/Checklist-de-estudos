import ToDoContext from "./ToDoContext";
import { useEffect, useState } from "react";

const TODOS = "todos";
export function ToDoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []); // tenho savedTodos ? se sim leia os todos se nao, uma lista vazia
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo)
    }
    setShowDialog(true);
  };
  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null)
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toggleToDoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === selectedTodo.id) {
          return {
            ...t,
            description: formData.get('description')
          };
        }
        return t;
      });
    });
  };

  
  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };



  return (
    <ToDoContext
      value={{
        todos,
        addTodo,
        toggleToDoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
        editTodo
      }}
    >
      {children}
    </ToDoContext>
  );
}
