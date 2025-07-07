
import React from 'react';
import { Rocket, Zap, Wand, Globe, CheckCircle, Users, Settings, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVP Websites",
      description: "Get your working product live fast — test with real users, validate your idea, start growing",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "High-Converting Landing Pages", 
      description: "Conversion-focused pages that grab attention and turn visitors into customers",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Wand,
      title: "AI Tools & Automations",
      description: "Custom AI-powered tools that save time and wow your users", 
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Globe,
      title: "Brand Websites",
      description: "Fast-loading, mobile-ready sites that make your startup look legit",
      gradient: "from-cyan-400 to-blue-400"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Quick Strategy Call",
      description: "We sync on your vision and plan a smart, buildable MVP in 30 minutes",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Fast Build & Launch",
      description: "I build using AI-first tools and proven frameworks — no wasted time",
      icon: Settings,
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "03",
      title: "Real-World Testing", 
      description: "We test with actual users and tweak based on real feedback",
      icon: CheckCircle,
      color: "from-blue-400 to-cyan-400"
    },
    {
      number: "04",
      title: "Ship & Scale",
      description: "You launch confidently and start seeing real traction",
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6">
        {/* Services Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What I Build for Founders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fast, focused solutions that help you launch, validate, and grow — without the complexity or endless delays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group backdrop-blur-md bg-white/40 border border-white/50 rounded-xl p-6 hover:bg-white/60 hover:border-blue-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How We Launch Your MVP Fast
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My no-code/AI-powered system gets you from idea to live product in weeks, not months
            </p>
          </div>

          {/* Timeline for Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-4 gap-8">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                      
                      {/* Card */}
                      <div className="backdrop-blur-md bg-white/40 border border-white/50 rounded-xl p-6 hover:bg-white/60 hover:border-blue-200/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group mt-12">
                        <div className="text-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-slate-400 mb-2">{step.number}</div>
                          <h3 className="font-semibold text-slate-800 mb-3 text-lg">{step.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stacked Cards for Mobile/Tablet */}
          <div className="lg:hidden space-y-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="backdrop-blur-md bg-white/40 border border-white/50 rounded-xl p-6 hover:bg-white/60 hover:border-blue-200/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-slate-400">{step.number}</span>
                        <h3 className="font-semibold text-slate-800 text-lg">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
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
