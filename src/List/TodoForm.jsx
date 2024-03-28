import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border rounded-md p-2 mr-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;