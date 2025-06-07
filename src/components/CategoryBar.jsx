import React from 'react';
import { Button } from '@/components/ui/button';

const categories = ['Economy', 'Sports', 'Tech', 'World', 'India'];

const CategoryBar = () => {
  return (
    <div>
        <div className='w-[100%] h-0.25 bg-neutral-500 '></div>
        <div className="flex flex-wrap gap-3 px-6 py-4 bg-white border-b">
            {categories.map(category => (
                <Button
                key={category}
                variant="outline"
                className="rounded-full text-sm border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                {category}
                </Button>
            ))}
            </div>
    </div>
  );
};

export default CategoryBar;
