import Hero from '@/components/Hero';
import ToolCarousel from '@/components/ToolCarousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-20">
          <ToolCarousel />
        </div>
      </div>
    </div>
  );
};

export default Index;