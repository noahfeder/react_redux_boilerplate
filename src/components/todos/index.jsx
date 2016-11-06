import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as todosActions from '../../actions/todosActions';

import TodoForm from './todoForm.jsx';
import TodoList from './todoList.jsx';

import './todos.scss';

const todosComponent = ({
  todos,
  create_todo,
  edit_todo_text,
  toggle_todo_completed_state
}) =>
  <div className="todo-app">
    <TodoForm
      todo={todos.get('new_todo')}
      create_todo={create_todo}
      edit_todo_text={edit_todo_text}
    />
    <TodoList
      todos={
        todos
          .filter((todo, todo_id) => todo_id !== 'new_todo')
          .map((todo, todo_id) => todo.set('id', todo_id))
          .toList()
      }
      toggle_todo_completed_state={toggle_todo_completed_state}
    />
  </div>;

const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = dispatch => ({
    edit_todo_text: bindActionCreators(todosActions.edit_todo_text, dispatch),
    create_todo: bindActionCreators(todosActions.create_todo, dispatch),
    toggle_todo_completed_state: bindActionCreators(todosActions.toggle_todo_completed_state, dispatch)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todosComponent);
