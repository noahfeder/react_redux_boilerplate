import React from 'react';

export default ({todo, create_todo, edit_todo_text}) =>
<div className='todo-form'>
  <div className='form-group'>
    <label>Enter Todo Text</label>
    <input
      className='form-control'
      type="text"
      value={todo.get('text')}
      onChange={e => edit_todo_text('new_todo', e.target.value)}
      onKeyUp={e => {
        if (e.which === 13 && todo.get('text') !== '') {
          create_todo(todo.get('text'));
        }
      }}
    />
  </div>
</div>;
