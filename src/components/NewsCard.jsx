import React from 'react';

const NewsCard = ({ title, summary, sentiment, time }) => {
  return (
    <div className="p-4 rounded-xl shadow border bg-white flex flex-col justify-between h-full hover:shadow-md transition">
      <div>
        <h2 className="font-semibold text-lg mb-2 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{summary}</p>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <button className="text-sm text-blue-600 hover:underline">AI Summary</button>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default NewsCard;
