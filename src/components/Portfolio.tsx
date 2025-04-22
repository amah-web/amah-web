import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Conversion Rate Boost",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    metrics: {
      revenue: "$125,000",
      increase: "85%",
      timeframe: "6 Months"
    }
  },
  {
    id: 2,
    title: "SaaS Partner Program Launch",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    metrics: {
      revenue: "$250,000",
      increase: "130%",
      timeframe: "12 Months"
    }
  },
  {
    id: 3,
    title: "Finance Website Traffic Growth",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    metrics: {
      revenue: "$80,000",
      increase: "65%",
      timeframe: "4 Months"
    }
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Case <span className="text-sky-500">Studies</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Results-driven campaigns that have driven significant growth for my clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center">
                    <p className="text-emerald-500 font-bold text-lg">{item.metrics.revenue}</p>
                    <p className="text-xs text-slate-500">Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-500 font-bold text-lg">{item.metrics.increase}</p>
                    <p className="text-xs text-slate-500">Increase</p>
                  </div>
                  <div className="text-center">
                    <p className="text-emerald-500 font-bold text-lg">{item.metrics.timeframe}</p>
                    <p className="text-xs text-slate-500">Timeframe</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-slate-200 text-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200"
                  onClick={() => window.open("https://www.maksimalindiri.com/", "_blank")}
                >
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
