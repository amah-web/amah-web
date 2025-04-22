
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Turn Your <span className="text-sky-500">Traffic</span> Into <span className="text-emerald-500">Revenue</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              Award-winning affiliate marketing strategies that drive conversions and maximize your earning potential with top-tier brands.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="text-md bg-sky-500 hover:bg-sky-600 px-6 py-6">
                View My Portfolio
              </Button>
              <Button variant="outline" className="text-md border-slate-300 text-slate-700 hover:text-sky-500 hover:border-sky-500 px-6 py-6">
                Contact Me
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-sky-500">50+</p>
                <p className="text-sm text-slate-500 mt-1">Brands</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-sky-500">$2M+</p>
                <p className="text-sm text-slate-500 mt-1">Generated</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-white shadow-sm">
                <p className="text-3xl font-bold text-sky-500">95%</p>
                <p className="text-sm text-slate-500 mt-1">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-emerald-500 opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-sky-500 opacity-20 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                alt="Affiliate Marketing Professional" 
                className="rounded-xl shadow-lg w-full max-w-md z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
