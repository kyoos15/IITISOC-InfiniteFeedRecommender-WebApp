import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const isLoggedIn = false; // Change to false to see Login/Signup state
  const user = { name: "Ishaan", avatar: "https://avatar.vercel.sh/ishaan" };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-violet-600">Newsify</div>

      {/* Nav Buttons */}
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        <button className="hover:text-violet-600 transition cursor-pointer">Home</button>
        <button className="hover:text-violet-600 transition cursor-pointer">Explore</button>
        <button className="hover:text-violet-600 transition cursor-pointer">Create</button>
        <button className="hover:text-violet-600 transition cursor-pointer">My Posts</button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="text-gray-700 font-medium hidden sm:inline">Hi, {user.name}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border shadow-md rounded-md p-1">
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500 cursor-pointer">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button className="bg-violet-500 hover:bg-violet-600 text-white">Login</Button>
            <Button variant="outline" className="border-violet-500 text-violet-500 hover:bg-violet-50">
              Signup
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
