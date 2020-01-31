import React from 'react';

// Todo is a single todo item.
// text: string is the text to show.
// completed: boolean is whether the todo should appear crossed out.
// onClick() is a callback to invoke when the todo is clicked.

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo;