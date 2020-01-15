import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      addTodo({
        title: inputValue,
        id: +new Date(),
        completed: false,
      });

      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleInput}
        value={inputValue}
      />
    </form>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Form;
