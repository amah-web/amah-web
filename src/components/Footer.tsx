
import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Affiliate<span className="text-sky-500">Pro</span>
            </h3>
            <p className="text-slate-400 max-w-md mb-6">
              Helping businesses maximize their affiliate marketing potential with strategic partnerships and data-driven campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-sky-500 transition-colors">About</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-sky-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-sky-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-sky-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Campaign Management</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Performance Analytics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Partnership Management</a></li>
              <li><a href="#" className="text-slate-400 hover:text-sky-500 transition-colors">Conversion Optimization</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} AffiliatePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
