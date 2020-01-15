import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(({ title, id, completed }) => (
      <Todo
        title={title}
        id={id}
        key={id}
        completed={completed}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
