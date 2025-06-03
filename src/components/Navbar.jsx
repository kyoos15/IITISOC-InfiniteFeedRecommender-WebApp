import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">LOGO</div>
      <div className="space-x-6">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Saved</a>
        <a href="#">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
