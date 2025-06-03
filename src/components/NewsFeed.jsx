import React from 'react';
import NewsCard from './NewsCard';
import { useNews } from '../context/NewsContext';

const NewsFeed = () => {
  const { news } = useNews();

  return (
    <div className="px-6 py-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default NewsFeed;
