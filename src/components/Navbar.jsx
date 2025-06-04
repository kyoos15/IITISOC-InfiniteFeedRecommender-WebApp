import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="font-semibold text-xl text-gray-800">Infinite Feed</div>
      <div className="space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Categories</a>
        <a href="#" className="hover:text-black">Saved</a>
        <a href="#" className="hover:text-black">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
