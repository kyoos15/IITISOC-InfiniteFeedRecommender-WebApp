import React from 'react';

const sentimentColor = {
  Positive: 'bg-green-500',
  Neutral: 'bg-gray-400',
  Negative: 'bg-red-500'
};

const NewsCard = ({ title, summary, sentiment, time }) => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white flex flex-col justify-between h-full">
      <div>
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{summary}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">AI Summary</button>
        <span className={`text-white text-sm px-2 py-1 rounded-full ${sentimentColor[sentiment]}`}>
          {sentiment}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-2">News Source – {time}</div>
    </div>
  );
};

export default NewsCard;
