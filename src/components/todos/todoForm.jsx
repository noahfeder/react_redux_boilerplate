import React from 'react';

export default ({todo, createTodo, editTodoText}) =>
<div>
  <input
    type="text"
    value={todo.get('text')}
    onChange={e => editTodoText('new_todo', e.target.value)}
  />
  <button onClick={() => createTodo(todo.get('text'))}>Create Todo</button>
</div>