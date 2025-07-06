import React from 'react';

const MyPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Why React is Awesome',
      description: 'React simplifies frontend development with components.',
      date: 'June 19, 2025',
      category: 'Tech'
    },
    {
      id: 2,
      title: 'India’s Startup Boom',
      description: 'The startup ecosystem is growing rapidly in India.',
      date: 'June 15, 2025',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Working endlessly',
      description: 'IT jobs working hours increase to 12hours a day in karnataka',
      date: 'June 20, 2025',
      category: 'tech'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Posts</h1>
      <div className="flex flex-col gap-5">
        {posts.map(post => (
          <div key={post.id} className="border rounded-xl p-5 hover:shadow-md transition">
            <div className="text-xs text-gray-500 mb-1">{post.date} · {post.category}</div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
