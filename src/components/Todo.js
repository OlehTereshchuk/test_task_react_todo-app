import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  deleteTodo, toggleComplete, editTodo,
} from '../store/todoListReducer';

const Todo = ({
  title, id, deleteToDo, toggleCompleteToDo, completed, editToDo,
}) => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [inputEditValue, setInputEditValue] = useState(title);

  const selectToEdit = (idTodo) => {
    setSelectedTodo(idTodo);
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      handleTodoChanges();
    }

    if (e.key === 'Escape') {
      setSelectedTodo(null);
    }
  };

  const handleInputChange = ({ target }) => {
    setInputEditValue(target.value);
  };

  const handleTodoChanges = () => {
    if (inputEditValue.trim().length === 0) {
      deleteToDo(id);
    }

    editToDo(id, inputEditValue);
    setSelectedTodo(null);
  };

  return (
    <li className={cn({
      completed,
      editing: id === selectedTodo,
    })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id={id}
          checked={completed}
          onChange={() => toggleCompleteToDo(id)}
        />
        <label htmlFor={id}>{title}</label>
        <button
          type="button"
          className="editor"
          onClick={() => selectToEdit(id)}
        />
        <button
          type="button"
          className="destroy"
          onClick={() => deleteToDo(id)}
        />
      </div>
      {selectedTodo && (
        <input
          autoFocus
          type="text"
          className="edit"
          onKeyUp={handlePressEnter}
          onChange={handleInputChange}
          value={inputEditValue}
          onBlur={handleTodoChanges}
        />
      )}
    </li>
  );
};

const mapMethodsToProps = {
  deleteToDo: deleteTodo,
  toggleCompleteToDo: toggleComplete,
  editToDo: editTodo,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deleteToDo: PropTypes.func.isRequired,
  toggleCompleteToDo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editToDo: PropTypes.func.isRequired,
};

export default connect(null, mapMethodsToProps)(Todo);
