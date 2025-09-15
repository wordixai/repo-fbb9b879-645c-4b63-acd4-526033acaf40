import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Zap, 
  Camera, 
  Shield, 
  BarChart3,
  Figma,
  Github
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
}

const tools: Tool[] = [
  { id: '1', name: 'VS Code', icon: <Code2 />, category: 'Development', color: 'from-blue-500 to-purple-600' },
  { id: '2', name: 'Figma', icon: <Figma />, category: 'Design', color: 'from-pink-500 to-violet-600' },
  { id: '3', name: 'Database', icon: <Database />, category: 'Backend', color: 'from-green-500 to-emerald-600' },
  { id: '4', name: 'Web Dev', icon: <Globe />, category: 'Frontend', color: 'from-orange-500 to-red-600' },
  { id: '5', name: 'Mobile', icon: <Smartphone />, category: 'Mobile', color: 'from-cyan-500 to-blue-600' },
  { id: '6', name: 'Settings', icon: <Settings />, category: 'DevOps', color: 'from-gray-500 to-slate-600' },
  { id: '7', name: 'Performance', icon: <Zap />, category: 'Optimization', color: 'from-yellow-500 to-orange-600' },
  { id: '8', name: 'Camera', icon: <Camera />, category: 'Media', color: 'from-indigo-500 to-purple-600' },
  { id: '9', name: 'Security', icon: <Shield />, category: 'Security', color: 'from-red-500 to-pink-600' },
  { id: '10', name: 'Analytics', icon: <BarChart3 />, category: 'Analytics', color: 'from-teal-500 to-cyan-600' },
  { id: '11', name: 'GitHub', icon: <Github />, category: 'Version Control', color: 'from-gray-600 to-gray-800' },
  { id: '12', name: 'Design Tools', icon: <Palette />, category: 'Creative', color: 'from-purple-500 to-pink-600' },
];

const ToolCard: React.FC<{ tool: Tool; isPaused: boolean }> = ({ tool, isPaused }) => {
  return (
    <div className={cn(
      "flex-shrink-0 w-48 h-32 mx-4 rounded-2xl shadow-lg transform transition-all duration-300",
      "hover:scale-105 hover:shadow-2xl cursor-pointer",
      "bg-gradient-to-br", 
      tool.color,
      "group relative overflow-hidden"
    )}>
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
        <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
          {tool.icon}
        </div>
        <h3 className="font-bold text-lg text-center leading-tight">{tool.name}</h3>
        <p className="text-sm opacity-80 mt-1">{tool.category}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

const CarouselRow: React.FC<{ 
  tools: Tool[]; 
  direction: 'left' | 'right'; 
  isPaused: boolean;
}> = ({ tools, direction, isPaused }) => {
  // Duplicate tools to create seamless loop
  const duplicatedTools = [...tools, ...tools];
  
  return (
    <div className="relative overflow-hidden">
      <div 
        className={cn(
          "flex",
          direction === 'right' ? 'scroll-right' : 'scroll-left',
          isPaused && 'paused'
        )}
        style={{ width: `${tools.length * 224}px` }} // 224px = 192px (w-48) + 32px (mx-4)
      >
        {duplicatedTools.map((tool, index) => (
          <ToolCard 
            key={`${tool.id}-${index}`} 
            tool={tool} 
            isPaused={isPaused}
          />
        ))}
      </div>
    </div>
  );
};

const ToolCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const firstRowTools = tools.slice(0, 6);
  const secondRowTools = tools.slice(6, 12);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <div 
      className="w-full space-y-8 py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Our Integrated Tools
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful suite of development and design tools at your fingertips
        </p>
      </div>

      <CarouselRow 
        tools={firstRowTools} 
        direction="right" 
        isPaused={isPaused}
      />
      
      <CarouselRow 
        tools={secondRowTools} 
        direction="left" 
        isPaused={isPaused}
      />
    </div>
  );
};

export default ToolCarousel;