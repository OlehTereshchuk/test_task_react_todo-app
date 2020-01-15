const SET_TODOLIST = 'SET_TODOLIST';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
const EDIT_TODO = 'EDIT_TODO';

export const setTodoList = todoList => ({
  type: SET_TODOLIST,
  todoList,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  todoId,
});

export const toggleComplete = todoId => ({
  type: TOGGLE_COMPLETE,
  todoId,
});

export const editTodo = (todoId, newTitle) => ({
  type: EDIT_TODO,
  todoId,
  newTitle,
});

const todoListReducer = (todoList = [], action) => {
  switch (action.type) {
    case SET_TODOLIST:
      return action.todoList;
    case ADD_TODO:
      return [...todoList, action.todo];
    case DELETE_TODO:
      return todoList.filter(({ id }) => id !== action.todoId);
    case TOGGLE_COMPLETE:
      return todoList.map((todo) => {
        if (todo.id === action.todoId) {
          return {
            ...todo, completed: !todo.completed,
          };
        }

        return todo;
      });
    case EDIT_TODO:
      return todoList.map((todo) => {
        if (todo.id === action.todoId) {
          return {
            ...todo, title: action.newTitle,
          };
        }

        return todo;
      });
    default:
      return todoList;
  }
};

export default todoListReducer;
