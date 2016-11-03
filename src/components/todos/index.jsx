import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as todosActions from '../../actions/todosActions'

import TodoForm from './todoForm.jsx';
import TodoList from './todoList.jsx';

import './todos.scss';

const todosComponent = ({todos, createTodo, editTodoText}) =>
  <div>
    <TodoForm
      todo={todos.get('new_todo')}
      createTodo={createTodo}
      editTodoText={editTodoText}
    />
    <TodoList todos={
      todos
        .filter((todo, todoId) => todoId !== 'new_todo')
        .map((todo, todoId) => todo.set('id', todoId))
        .toList()
    }/>
  </div>

const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = dispatch => ({
    editTodoText: bindActionCreators(todosActions.editTodoText, dispatch),
    createTodo: bindActionCreators(todosActions.createTodo, dispatch)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todosComponent);