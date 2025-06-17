import React from 'react';
import NewsCard from './NewsCard';
import { useNews } from '../context/NewsContext';

const NewsFeed = () => {
    const { news } = useNews();
    if (!news || news.length === 0) {
        return (
            <div>Loading ....</div>
        )
    }
    console.log("news is: ", news);

    return (
        <div className="px-6 py-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {news.data.map((item, idx) => (
                <NewsCard key={idx} {...item} />
            ))}
        </div>
    );
};

export default NewsFeed;
