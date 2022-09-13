import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { colorChanged, statusChanged } from "../redux/filters/actions";
// Making UI more meaningful
const remainingTask = (todoTaskLeft) => {
  switch (todoTaskLeft) {
    case 0:
      return "No task";

    case 1:
      return "1 task";

    default:
      return `${todoTaskLeft} tasks`;
  }
};
const Footer = () => {
  const todos = useSelector((state) => state.todos); //calling todos from redux using useSelector
  const filters = useSelector((state) => state.filter); //calling filters from redux using useSelector

  const dispatch = useDispatch();
  const remainingTodo = todos.filter((todo) => !todo.completed).length;
  const { status, colors } = filters;

  const handleChangeStatus = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{remainingTask(remainingTodo)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            className={`cursor-pointer ${
              status.includes("All") && "font-bold"
            }`}
            onClick={() => handleChangeStatus("All")}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              status.includes("Incomplete") && "font-bold"
            }`}
            onClick={() => handleChangeStatus("Incomplete")}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${
              status.includes("Complete") && "font-bold"
            }`}
            onClick={() => handleChangeStatus("Complete")}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors.includes("green") && "bg-green-500"
            }`}
            onClick={() => handleColorChange("green")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors.includes("red") && "bg-red-500"
            }`}
            onClick={() => handleColorChange("red")}
          ></li>
          <li
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors.includes("yellow") && "bg-yellow-500"
            }`}
            onClick={() => handleColorChange("yellow")}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
