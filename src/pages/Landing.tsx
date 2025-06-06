import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const Landing = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/6281324409654", "_blank");
  };
  return <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-12">
      {/* Profile Section */}
      <div className="mb-8">
        <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
          <AvatarImage alt="Ummi Salamah" src="/lovable-uploads/c3040c16-9b9b-407c-8df1-a5f6a9402ae1.jpg" />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>

      {/* Introduction */}
      <div className="max-w-2xl text-center mb-12 animate-fade-in">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">
          Hi, I'm Amah
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8 px-4">Saya senang mencari uang di internet. Saya juga belajar hal baru terutama tentang bisnis dan pengembangan diri, saya juga sangat antusias dengan perkembangan AI.
Website ini merekomendasikan beberapa produk dan kelas dari vendor yang terpercaya.</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-md mb-8">
        <Button variant="outline" onClick={() => window.open("https://amahdigital.blogspot.com/", "_blank")} className="w-full h-auto py-4 px-6 border border-slate-200 shadow-sm hover:shadow transition-all duration-300 bg-sky-400 hover:bg-sky-300 text-slate-50">
          Jasa dan Produk Digital
        </Button>
        
        <Button variant="outline" onClick={() => window.open("https://amahdigital.blogspot.com/p/gratis.html", "_blank")} className="w-full h-auto py-4 px-6 border border-slate-200 shadow-sm hover:shadow transition-all duration-300 bg-sky-400 hover:bg-sky-300 text-slate-50">
          Produk Gratis
        </Button>
        
        <Button variant="outline" onClick={() => window.open("https://riyanputra.id/aff/1162/10158/", "_blank")} className="w-full h-auto py-4 px-6 border border-slate-200 shadow-sm hover:shadow transition-all duration-300 bg-sky-400 hover:bg-sky-300 text-slate-50">
          Panduan Affiliate Marketing Mendapat 1 Juta Pertama
        </Button>

        <Button onClick={openWhatsApp} className="w-full h-auto py-4 px-6 text-white font-medium shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600">
          <MessageCircle className="w-5 h-5" />
          Hubungi via WhatsApp
        </Button>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-sm text-slate-500">
        Developed by Amah Digital
      </footer>
    </div>;
};
export default Landing;