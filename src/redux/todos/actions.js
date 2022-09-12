import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    DELETED,
    TOGGLED
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (color, todoId) => {
  return {
    type: COLORSELECTED,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
