import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const filterByStatus = (todo) => {
    const { status } = filter;
    switch (status) {
      case "Incomplete":
        return !todo.completed;
      case "Complete":
        return todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filter;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <>
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter(filterByStatus)
          .filter(filterByColors)
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </div>
    </>
  );
};

export default TodoList;
