import { Button } from "@/components/ui/button";
import { ArrowDown, PlayCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-light text-white px-8 py-4 text-lg">
                {t('hero.cta')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-brand-navy bg-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                {t('hero.learn-more')}
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal-light">50+</div>
                <div className="text-sm text-gray-300">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal-light">15+</div>
                <div className="text-sm text-gray-300">Team Experts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal-light">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern workspace showcasing our tech solutions"
                className="rounded-2xl shadow-2xl w-full animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-brand-navy font-semibold">Live Projects: 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="#services" className="inline-flex items-center text-white hover:text-brand-teal-light transition-colors">
            <span className="mr-2">Discover Our Services</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
