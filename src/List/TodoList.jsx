import React from 'react';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="flex items-center justify-between border-b p-2">
          {todo}
          <button className="text-red-500" onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;