import React from 'react';

import TodoItem from './todoItem';

const todoList = ({
  todos,
  toggle_todo_completed_state
}) =>
<div>
  <ul>
    {todos.map((todo) =>
      <TodoItem
        key = {todo.get('id')}
        todo={todo}
        toggle_todo_completed_state= {toggle_todo_completed_state}
      />
    )}
  </ul>
</div>;

export default todoList;
