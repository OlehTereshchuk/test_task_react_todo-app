import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import Form from './components/Form';
import { setTodoList, addTodo } from './store/todoListReducer';
import { getTodoList } from './store/store';

const App = ({ todoList, addToDo, setToDoList }) => {
  useEffect(() => {
    const data = localStorage.getItem('todo-list');

    if (data) {
      setToDoList(JSON.parse(data));
    }
  }, [setToDoList]);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form addTodo={addToDo} />
      </header>
      {todoList.length > 0
        ? (
          <section className="main">
            <TodoList todos={todoList} />
          </section>
        )
        : ''
      }
    </section>
  );
};

const mapStateToProps = state => ({
  todoList: getTodoList(state),
});

const mapMethodsToProps = {
  setToDoList: setTodoList,
  addToDo: addTodo,
};

App.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  addToDo: PropTypes.func.isRequired,
  setToDoList: PropTypes.func.isRequired,
};

App.defaultProps = {
  todoList: [],
};

export default connect(mapStateToProps, mapMethodsToProps)(App);
