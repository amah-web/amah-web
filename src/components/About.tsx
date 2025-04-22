
import React from "react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About <span className="text-sky-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I help brands boost their revenue through strategic affiliate marketing partnerships and data-driven campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-sky-500 opacity-10 rounded-full z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="Workspace"
              className="rounded-lg shadow-xl z-10 relative"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Maximizing Your Affiliate Success
            </h3>
            <p className="text-slate-600 mb-6">
              With over 7 years of experience in affiliate marketing, I've helped businesses across various niches grow their revenue streams through strategic partnerships and optimization techniques.
            </p>
            <p className="text-slate-600 mb-6">
              My data-driven approach ensures that every campaign delivers measurable results, focusing on high-converting traffic sources and optimizing for maximum ROI.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-slate-700">SEO Optimization</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-slate-700">Content Creation</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-slate-700">Conversion Optimization</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                  <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-slate-700">Audience Targeting</p>
              </div>
            </div>
            
            <Button className="bg-sky-500 hover:bg-sky-600">
              Learn More About My Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
