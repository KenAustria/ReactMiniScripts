import React from 'react';
import Todo from '../components/Todo';

// TodoList is a list showing visible todos.
// todos: Array is an array of todo items with { id, text, completed } shape.
// onTodoClick(id: number) is a callback to invoke when a todo is clicked.

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList;