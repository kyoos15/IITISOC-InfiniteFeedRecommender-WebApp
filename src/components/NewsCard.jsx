import React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@/components/ui/avatar";

const NewsCard = ({ title, summary, time, channel }) => {
  return (
    <div className="bg-blue-100 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between h-full">

      {/* Header: Avatar + Author */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={channel?.logo} alt={channel?.name} />
            <AvatarFallback>{channel?.name?.charAt(0) || "C"}</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">{channel?.author || "Author Name"}</p>
            <p className="text-xs text-gray-500">@{channel?.name?.replace(/\s+/g, '').toLowerCase()}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>

      {/* News Content */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{summary}</p>
      </div>
    </div>
  );
};

export default NewsCard;
