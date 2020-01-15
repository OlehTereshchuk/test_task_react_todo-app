import { createStore, combineReducers } from 'redux';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

export const getTodoList = state => state.todoList;

const store = createStore(rootReducer);

export default store;
