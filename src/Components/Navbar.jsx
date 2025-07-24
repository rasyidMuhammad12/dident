import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icon library
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-11 py-6 flex justify-between items-center  relative ">
      {/* Logo + Desktop Links */}
 
           <div className="flex items-center gap-22">
                 <Link to="/">
        <div className="text-xl font-bold bg-black text-white rounded-md px-4 py-2">d</div>
        </Link>
 

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-md lg:gap-x-15">
          <a href="#home" className="text-gray-700 hover:text-black  transition">Home</a>
          <a href="#how" className="text-gray-700 hover:text-black transition">How it Works</a>
          <a href="#benefits" className="text-gray-700 hover:text-black transition">Benefits</a>
          <a href="#FAQ" className="text-gray-700 hover:text-black transition">FAQ</a>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden md:block">
        <button className="bg-black text-white px-4 py-2 rounded-lg transition hover:opacity-80">
          Connect Wallet
        </button>
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 px-7 left-0 w-full bg-white shadow-[0px_20px_18px_-4px_rgba(17,_12,_46,_0.15)] rounded-b-3xl    flex flex-col items-left px-4 gap-6 py-6 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0  invisible -translate-y-4"
        } md:hidden`}
      >
        <a href="#home" className="text-black hover:text-black  transition">Home</a>
        <a href="#how" className="text-black hover:text-black transition">How it Works</a>
        <a href="#benefits" className="text-black hover:text-black transition">Benefits</a>
        <a href="#faq" className="text-black hover:text-black transition">FAQ</a>
        <button className="bg-black text-white px-4 py-3 rounded-xl transition hover:opacity-80">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
