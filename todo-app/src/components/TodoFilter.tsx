import React from 'react';
import { Category } from '../types';

export type FilterStatus = 'all' | 'completed' | 'incomplete';

interface TodoFilterProps {
  categories: Category[];
  currentStatusFilter: FilterStatus;
  currentCategoryFilter?: string;
  onStatusFilterChange: (status: FilterStatus) => void;
  onCategoryFilterChange: (categoryId?: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  categories,
  currentStatusFilter,
  currentCategoryFilter,
  onStatusFilterChange,
  onCategoryFilterChange,
}) => {
  return (
    <div>
      <div>
        <span>進捗フィルター: </span>
        <button onClick={() => onStatusFilterChange('all')} disabled={currentStatusFilter === 'all'}>すべて</button>
        <button onClick={() => onStatusFilterChange('incomplete')} disabled={currentStatusFilter === 'incomplete'}>未完了</button>
        <button onClick={() => onStatusFilterChange('completed')} disabled={currentStatusFilter === 'completed'}>完了済み</button>
      </div>
      <div>
        <span>カテゴリフィルター: </span>
        <select
          value={currentCategoryFilter || ''}
          onChange={(e) => onCategoryFilterChange(e.target.value || undefined)}
        >
          <option value="">すべてのカテゴリ</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
