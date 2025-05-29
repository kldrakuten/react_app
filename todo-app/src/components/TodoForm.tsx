import React, { useState } from 'react';
import { Category } from '../types';

interface TodoFormProps {
  categories: Category[];
  onAddTodo: (text: string, categoryId?: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ categories, onAddTodo }) => {
  const [text, setText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAddTodo(text.trim(), selectedCategoryId);
    setText('');
    setSelectedCategoryId(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスク"
      />
      <select
        value={selectedCategoryId || ''}
        onChange={(e) => setSelectedCategoryId(e.target.value || undefined)}
      >
        <option value="">カテゴリなし</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">タスク追加</button>
    </form>
  );
};

export default TodoForm;
