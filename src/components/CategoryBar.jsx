import React from 'react';

const categories = ['Economy', 'Sports', 'Tech', 'World', 'India'];

const colors = {
  Economy: 'bg-orange-400',
  Sports: 'bg-blue-400',
  Tech: 'bg-green-400',
  World: 'bg-cyan-400',
  India: 'bg-emerald-400'
};

const CategoryBar = () => {
  return (
    <div className="flex flex-wrap gap-3 px-6 py-4 bg-white">
      {categories.map(category => (
        <span
          key={category}
          className={`px-4 py-1 rounded-full text-white font-semibold ${colors[category]}`}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryBar;
