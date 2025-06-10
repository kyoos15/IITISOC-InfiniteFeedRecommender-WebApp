import React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar";

// Background color based on sentiment
const getBackgroundColor = (sentiment) => {
  switch (sentiment?.toLowerCase()) {
    case 'positive':
      return 'bg-green-50';
    case 'negative':
      return 'bg-red-50';

      case 'neutral':
      return 'bg-yellow-50';
    default:
      return 'bg-white';
  }
};

const NewsCard = ({ title, summary, time, channel, sentiment, category }) => {
  return (
    <div className={`rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${getBackgroundColor(sentiment)}`}>

      {/* Header: Avatar + Author */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11">
            <AvatarImage src={"https://avatar.vercel.sh/ishaan"} alt={channel?.name} />
            <AvatarFallback>{channel?.name?.charAt(0) || "C"}</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-900">{channel?.author || "Author Name"}</p>
            <p className="text-xs text-gray-500">@{channel?.name?.replace(/\s+/g, '').toLowerCase()}</p>
          </div>
        </div>
        
        {/* Category Tag */}
        {category && (
          <span className="text-xs bg-blue-300 text-gray-600 px-3 py-1 rounded-full font-medium">
            {category}
          </span>
        )}
      </div>

      {/* News Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">{title}</h2>
        <p className="text-sm md:text-[15px] text-gray-700 leading-snug line-clamp-4">{summary}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-4">
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default NewsCard;
