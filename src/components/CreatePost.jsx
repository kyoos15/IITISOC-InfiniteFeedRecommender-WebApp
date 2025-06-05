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
    <div className="max-w-4xl mx-auto mt-12 px-6 py-8 bg-emerald-100 border rounded-lg shadow-sm space-y-6 items-center">
      <h1 className="text-3xl font-semibold text-red-500 ">Create New Post</h1>

      <div>
        <label className="block text-gray-700  text-2xl  mb-1">Title</label>
        <Input
          type="text"
          placeholder="Enter the post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-base px-4 py-3"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-2xl mb-1">Content</label>
        <Textarea
          placeholder="Write your article here..."
          rows={28}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-base px-4 py-3 resize-none"
        />
      </div>

      <Button
        onClick={handlePublish}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium rounded-md cursor-pointer"
      >
        Publish
      </Button>
    </div>
  );
};

export default CreatePost;
