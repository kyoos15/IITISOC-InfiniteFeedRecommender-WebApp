import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = () => {
    if (title.trim() && content.trim()) {
      console.log("Publishing Post:", { title, content });
      setTitle('');
      setContent('');
    } else {
      alert("Please fill in both title and content.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-14 px-6 py-10 bg-white border border-gray-200 rounded-2xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">
         Write a New Post
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Title
          </label>
          <Input
            type="text"
            placeholder="e.g., How to stay productive while coding"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-base px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Content
          </label>
          <Textarea
            placeholder="Write your article here..."
            rows={16}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full text-base px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none resize-none"
          />
        </div>

        <div className="text-center">
          <Button
            onClick={handlePublish}
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white px-8 py-3 text-lg font-semibold rounded-lg cursor-pointer"
          >
             Publish Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
