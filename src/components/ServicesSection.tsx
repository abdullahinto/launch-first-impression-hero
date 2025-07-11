
import React from 'react';
import { Rocket, Zap, Wand, Globe, CheckCircle, Users, Settings, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.2);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.2);
  
  const services = [
    {
      icon: Rocket,
      title: "MVP Websites",
      description: "Launch a working product fast — test, validate, and grow",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Landing Pages", 
      description: "Conversion-first pages that attract, engage, and convert",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Wand,
      title: "AI Tools & Automations",
      description: "Smart tools to save time and impress your users", 
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Brand Websites",
      description: "Beautifully built, fast-loading brand homes for your startup",
      gradient: "from-cyan-400 to-blue-400"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Vision Sync",
      description: "We align on your idea and define a smart, buildable MVP",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Build & Launch",
      description: "I build everything using fast tools and smart systems",
      icon: Settings,
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "03",
      title: "Test & Polish", 
      description: "We tweak based on real user feedback",
      icon: CheckCircle,
      color: "from-blue-400 to-cyan-400"
    },
    {
      number: "04",
      title: "Ship & Grow",
      description: "You launch, share, and start seeing traction",
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6">
        {/* Services Section */}
        <div className="max-w-6xl mx-auto">
          <div 
            ref={servicesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What I Can Build for You
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Fast, focused solutions that help founders launch, validate, and grow their ideas without the complexity
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 transition-all duration-1000 delay-200 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 rounded-xl p-6 hover:bg-white/60 dark:hover:bg-white/20 hover:border-blue-200/50 dark:hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div 
            ref={processRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              How I Launch Your MVP — Fast
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My proven 4-step system that gets founders from idea to launched product in weeks, not months
            </p>
          </div>

          {/* Timeline for Desktop */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-600 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10`}></div>
                      
                      {/* Card */}
                      <div className="backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 rounded-xl p-6 hover:bg-white/60 dark:hover:bg-white/20 hover:border-blue-200/50 dark:hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group mt-12">
                        <div className="text-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-slate-400 dark:text-slate-500 mb-2">{step.number}</div>
                          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-lg">{step.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stacked Cards for Mobile/Tablet */}
          <div className={`lg:hidden space-y-6 transition-all duration-1000 delay-300 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 rounded-xl p-6 hover:bg-white/60 dark:hover:bg-white/20 hover:border-blue-200/50 dark:hover:border-blue-400/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-slate-400 dark:text-slate-500">{step.number}</span>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
