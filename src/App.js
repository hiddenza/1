import './App.css';
import React from 'react';
import { Laptop, Server, Globe, Code, Phone, GraduationCap } from 'lucide-react';

const services = [
  { icon: <Laptop className="w-10 h-10 text-blue-600" />, title: "IT Solutions", description: "Cutting-edge IT services tailored for your business growth." },
  { icon: <Server className="w-10 h-10 text-blue-600" />, title: "Hosting Services", description: "Reliable, secure, and fast hosting solutions." },
  { icon: <Globe className="w-10 h-10 text-blue-600" />, title: "Tourism", description: "Explore new destinations with seamless experiences." },
  { icon: <Code className="w-10 h-10 text-blue-600" />, title: "Web Development", description: "Custom-designed, responsive, and high-performance websites." },
  { icon: <Phone className="w-10 h-10 text-blue-600" />, title: "Tech Support", description: "24/7 expert technical support for all your needs." },
  { icon: <GraduationCap className="w-10 h-10 text-blue-600" />, title: "Student Consultancy", description: "Guiding students toward the best educational opportunities worldwide." },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white border-b shadow-sm py-5">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Hiddenza Logo"
              className="h-32"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-700">Hiddenza</h1>
              <p className="text-sm text-gray-500">Tech | Tourism | Education</p>
            </div>
          </div>
        </div>
      </header>

      {/* Founder Section */}
      <div className="flex items-center gap-4 mt-6 mb-12 max-w-5xl mx-auto px-4">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`}
          alt="Musaab Al-Dabbagh"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
        />
        <div>
          <h3 className="text-xl font-semibold">Musaab Al-Dabbagh</h3>
          <p className="text-blue-600 font-medium">Founder</p>
          <p className="text-gray-700 max-w-md mt-1">
            Musaab Al-Dabbagh is the visionary founder of Hiddenza, leading innovation in tech, tourism, and education to deliver unmatched quality and service.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">What We Offer</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hiddenza — Founded by Musaab Al-Dabbagh. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
