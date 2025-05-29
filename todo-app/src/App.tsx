import React, { useState, useEffect } from 'react';
import { Todo, Category } from './types';
import CategoryForm from './components/CategoryForm';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter, { FilterStatus } from './components/TodoFilter';
import './App.css'; // App.css をインポート

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [{ id: 'default', name: 'デフォルト' }];
  });
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: new Date().toISOString(), // 簡単なID生成
      name,
    };
    setCategories([...categories, newCategory]);
  };

  const addTodo = (text: string, categoryId?: string) => {
    const newTodo: Todo = {
      id: new Date().toISOString(), // 簡単なID生成
      text,
      completed: false,
      categoryId,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    const statusMatch =
      statusFilter === 'all' ||
      (statusFilter === 'completed' && todo.completed) ||
      (statusFilter === 'incomplete' && !todo.completed);
    const categoryMatch = !categoryFilter || todo.categoryId === categoryFilter;
    return statusMatch && categoryMatch;
  });

  return (
    <div className="App">
      <h1>ToDoアプリ</h1>
      
      <h2>カテゴリ追加</h2>
      <CategoryForm onAddCategory={addCategory} />
      
      <h2>タスク追加</h2>
      <TodoForm categories={categories} onAddTodo={addTodo} />
      
      <h2>フィルタ</h2>
      <TodoFilter
        categories={categories}
        currentStatusFilter={statusFilter}
        currentCategoryFilter={categoryFilter}
        onStatusFilterChange={setStatusFilter}
        onCategoryFilterChange={setCategoryFilter}
      />
      
      <h2>タスク一覧</h2>
      <TodoList todos={filteredTodos} categories={categories} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
