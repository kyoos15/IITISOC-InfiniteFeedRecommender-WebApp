import React from 'react';

const categories = ['Economy', 'Sports', 'Tech', 'World', 'India'];

const CategoryBar = () => {
  return (
    <div className="flex flex-wrap gap-3 px-6 py-4 bg-white border-b">
      {categories.map(category => (
        <span
          key={category}
          className="px-4 py-1 rounded-full border text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryBar;
