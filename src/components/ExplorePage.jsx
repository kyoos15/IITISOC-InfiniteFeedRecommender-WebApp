import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const ExplorePage = () => {
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Technology', 'World', 'Sports', 'Business', 'Entertainment'];

  const dummyNews = [
    {
      id: 1,
      title: 'OpenAI launches GPT-5',
      description: 'The new GPT-5 model breaks benchmarks again.',
      category: 'Technology',
      time: '2h ago'
    },
    {
      id: 2,
      title: 'India wins Cricket World Cup',
      description: 'A stunning victory in the finals.',
      category: 'Sports',
      time: '4h ago'
    },
    {
      id: 3,
      title: 'Markets hit all-time high',
      description: 'Stocks surge amid tech rally.',
      category: 'Business',
      time: '1hr ago'
    }
  ];

  const filteredNews = category === 'All' ? dummyNews : dummyNews.filter(news => news.category === category);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={category === cat ? 'default' : 'outline'}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {filteredNews.map(news => (
          <div key={news.id} className="border p-5 rounded-xl hover:shadow-md transition-all">
            <p className="text-xs text-gray-500 mb-1">{news.time} · {news.category}</p>
            <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
            <p className="text-gray-700 text-sm">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
