import React from 'react'
import { useState } from "react";
 import { ChevronLeft, ChevronRight } from "lucide-react";
 import CardContent from '../Common/CardContent';
import Card from '../Common/Card';


const slider = [
  { name: "Azure", icon: "☁" },
  { name: "Blockchain", icon: "🔗" },
  { name: "Docker", icon: "🐳" },
  { name: "C#", icon: "💻" },
  { name: "C++", icon: "🔧" },
  { name: "Craft CMS", icon: "🛠" },
  { name: "CSS3", icon: "🎨" },
  { name: "DigitalOcean", icon: "🌊" },
  { name: "Kubernetes", icon: "☸" },
  { name: "PHP", icon: "🐘" },
  { name: "Sanity", icon: "🧠" },
  { name: "Flutter", icon: "💙" },
  { name: "Gatsby", icon: "⚛" },
  { name: "Python", icon: "🐍" },
  { name: "WordPress", icon: "📝" },
  { name: "Vuejs", icon: "🖼" },
  { name: "Swift", icon: "🦅" },
  { name: "Salesforce", icon: "🚀" },
  { name: "ROR", icon: "💎" },
  { name: "React", icon: "⚛" },
  { name: "JavaScript", icon: "📜" },
  { name: "Java", icon: "☕" },
  { name: "iOS", icon: "📱" },
  { name: "HubSpot", icon: "🧡" },
  { name: "HTML5", icon: "📄" },
  { name: "Larvel", icon: "🕊" },
];

const ServiceSlide = () => {
      const [index, setIndex] = useState(0);
  const itemsToShow = 6;

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - itemsToShow, 0));
  };

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + itemsToShow, slider.length - itemsToShow));
  };
  return (
        <div className="w-full max-w-4xl mx-auto py-7">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevSlide} className="p-2 bg-gray-100 rounded-full shadow">
          <ChevronLeft />
        </button>
        
        <button onClick={nextSlide} className="p-2 bg-gray-100 rounded-full shadow">
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {slider.slice(index, index + itemsToShow).map((tech, idx) => (
          <Card key={idx} className="text-center p-4 shadow-md">
            <CardContent>
                 <div className=" mb-2">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ServiceSlide