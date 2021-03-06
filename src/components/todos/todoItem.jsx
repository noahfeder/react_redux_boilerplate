import React from 'react';

const todoItem = ({
  todo,
  toggle_todo_completed_state,
  delete_todo
}) =>
  <li className={'todo ' + (todo.get('is_complete') ? 'complete' : 'incomplete')}>
    <div className='todo-text'>{todo.get('text')}</div>
    <div
        className='delete-todo'
        onClick={() => delete_todo(todo.get('id'))}
    >Delete</div>
    <div
      className='todo-status'
      onClick={() => toggle_todo_completed_state(todo.get('id'))}
    >
      {todo.get('is_complete') ? 'Complete' : 'Incomplete'}
    </div>
  </li>;

export default todoItem;
