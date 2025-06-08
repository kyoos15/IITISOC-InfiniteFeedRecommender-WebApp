import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false; // Change to true to simulate logged-in state
  const user = { name: "Ishaan", avatar: "https://avatar.vercel.sh/ishaan" };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Create", path: "/create" },
    { name: "My Posts", path: "/myposts" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-violet-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Newsify
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        {navLinks.map((link) => (
          <button
            key={link.name}
            className="hover:text-violet-600 transition cursor-pointer"
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="text-gray-700 font-medium">Hi, {user.name}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border shadow-md rounded-md p-1">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500" onClick={() => alert("Logging out...")}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button
              className="bg-violet-500 hover:bg-violet-600 text-white cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="border-violet-500 text-violet-500 hover:bg-violet-50 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </>
        )}
      </div>

      {/* Hamburger menu - Mobile only */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 z-50 gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className="text-gray-700 text-left px-2 py-1 hover:bg-violet-50 rounded-md"
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
          {isLoggedIn ? (
            <>
              <hr />
              <button onClick={() => navigate("/profile")} className="text-left px-2 py-1">
                Profile
              </button>
              <button onClick={() => navigate("/settings")} className="text-left px-2 py-1">
                Settings
              </button>
              <button
                onClick={() => {
                  alert("Logging out...");
                  setMenuOpen(false);
                }}
                className="text-left px-2 py-1 text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <hr />
              <Button variant="ghost" onClick={() => { navigate("/login"); setMenuOpen(false); }}>
                Login
              </Button>
              <Button variant="outline" onClick={() => { navigate("/signup"); setMenuOpen(false); }}>
                Signup
              </Button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
