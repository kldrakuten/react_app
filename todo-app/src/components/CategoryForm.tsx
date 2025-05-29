import React, { useState } from 'react';

interface CategoryFormProps {
  onAddCategory: (name: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onAddCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onAddCategory(name.trim());
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="新しいカテゴリ名"
      />
      <button type="submit">カテゴリ追加</button>
    </form>
  );
};

export default CategoryForm;
