
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 fixed top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-slate-900">
            Affiliate<span className="text-sky-500">Pro</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-slate-600 hover:text-sky-500 transition-colors">About</a>
          <a href="#services" className="text-slate-600 hover:text-sky-500 transition-colors">Services</a>
          <a href="#portfolio" className="text-slate-600 hover:text-sky-500 transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-slate-600 hover:text-sky-500 transition-colors">Testimonials</a>
          <a href="#contact" className="text-slate-600 hover:text-sky-500 transition-colors">Contact</a>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Work With Me
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#about" className="text-slate-600 hover:text-sky-500 transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-slate-600 hover:text-sky-500 transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#portfolio" className="text-slate-600 hover:text-sky-500 transition-colors py-2" onClick={toggleMenu}>Portfolio</a>
            <a href="#testimonials" className="text-slate-600 hover:text-sky-500 transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-slate-600 hover:text-sky-500 transition-colors py-2" onClick={toggleMenu}>Contact</a>
            <Button className="bg-emerald-500 hover:bg-emerald-600 w-full" onClick={toggleMenu}>
              Work With Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
