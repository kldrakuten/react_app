import React from 'react';
import { Todo, Category } from '../types';

interface TodoListProps {
  todos: Todo[];
  categories: Category[];
  onToggleComplete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, categories, onToggleComplete }) => {
  const getCategoryName = (categoryId?: string) => {
    if (!categoryId) return 'カテゴリなし';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '不明なカテゴリ';
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          {todo.text} - <em>{getCategoryName(todo.categoryId)}</em>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
