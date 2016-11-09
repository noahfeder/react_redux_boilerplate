import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as todosActions from '../../actions/todosActions';

import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoFilter from './todoFilter';

import './todos.scss';

export const unconnected_todos_component = ({
    todos,
    filter,
    create_todo,
    delete_todo,
    edit_todo_text,
    toggle_todo_completed_state
}) => {
  const filtered_todos = todos
    .filter((todo, todo_id) => todo_id !== 'new_todo')
    .filter(todo =>
      filter === 'all' ||
      filter === 'incomplete' && !todo.get('is_complete') ||
      filter === 'complete' && todo.get('is_complete'))
    .map((todo, todo_id) => todo.set('id', todo_id))
    .toList();
  return (
    <div className="todo-app">
      <TodoForm
        todo={todos.get('new_todo')}
        create_todo={create_todo}
        edit_todo_text={edit_todo_text}
      />
      <TodoFilter filter={filter} />
      <div>Showing {filtered_todos.size} / {todos.size - 1} todos:</div>
      <TodoList
        todos={filtered_todos}
        toggle_todo_completed_state={toggle_todo_completed_state}
        filter={filter}
        delete_todo={delete_todo}
      />
    </div>
  );
};

const mapStateToProps = ({todos}, {routeParams}) => ({
  todos,
  filter: routeParams.filter || 'all'
});

const mapDispatchToProps = dispatch => ({
  edit_todo_text: bindActionCreators(todosActions.edit_todo_text, dispatch),
  create_todo: bindActionCreators(todosActions.create_todo, dispatch),
  delete_todo: bindActionCreators(todosActions.delete_todo, dispatch),
  toggle_todo_completed_state: bindActionCreators(todosActions.toggle_todo_completed_state, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(unconnected_todos_component);
