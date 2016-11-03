import React from 'react';

export default ({todos}) =>

<div>
  <ul>
    {todos.map((todo) =>
      <li key={todo.get('id')}>{todo.get('text')}</li>
    )}
  </ul>
</div>