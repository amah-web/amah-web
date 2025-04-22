
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to your backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Let's <span className="text-sky-500">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to boost your affiliate marketing strategy? Get in touch today to discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-sky-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-slate-500">Email</h4>
                  <p className="text-slate-900">contact@affiliatepro.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-sky-500" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-slate-500">Phone</h4>
                  <p className="text-slate-900">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <h4 className="text-sm font-medium text-slate-500 mb-4">Connect on social media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-sky-500 p-3 rounded-full text-white hover:bg-sky-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-sky-500 p-3 rounded-full text-white hover:bg-sky-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-sky-500 p-3 rounded-full text-white hover:bg-sky-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
