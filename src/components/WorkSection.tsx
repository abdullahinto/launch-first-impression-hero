
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      name: "InkWorthy Creations",
      description: "Landing page redesign for a content-focused startup",
      whatIDid: "Revamped the layout using conversion-first design to increase leads",
      outcome: "Visitors now understand their offer clearly, leading to stronger engagement",
      image: "/images/inkworthy image.webp",
      liveUrl: "#"
    },
    {
      name: "Junood Creation", 
      description: "MVP site for a clothing brand founder",
      whatIDid: "Helped the founder launch their brand's website in record time",
      outcome: "Built customer trust with fast, mobile-ready design that reflects the brand",
      image: "/images/junood image.webp",
      liveUrl: "#"
    },
    {
      name: "AboutYouAI",
      description: "AI-powered 'About Me' generator",
      whatIDid: "Designed and built a smart, user-friendly tool for creators to auto-generate bios",
      outcome: "Boosted engagement with a no-hassle tool users actually loved sharing",
      image: "/images/about image.webp",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden" id="work">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              A few MVPs, tools, and sites I've helped launch — fast, clean, and ready to convert
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Project 1 - Large Card */}
            <div className="lg:col-span-7 group">
              <div className="backdrop-blur-md bg-white/60 border border-white/50 rounded-2xl p-8 hover:bg-white/80 hover:border-blue-200/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full">
                <div className="flex flex-col h-full">
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={projects[0].image} 
                      alt={projects[0].name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {projects[0].name}
                    </h3>
                    <p className="text-slate-600 mb-4 text-lg">
                      {projects[0].description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">What I did:</h4>
                      <p className="text-slate-600">
                        {projects[0].whatIDid}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-2">Outcome:</h4>
                      <p className="text-slate-600">
                        {projects[0].outcome}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                    <a 
                      href={projects[0].liveUrl}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects 2 & 3 - Stacked Cards */}
            <div className="lg:col-span-5 space-y-6">
              {projects.slice(1).map((project, index) => (
                <div key={index} className="group">
                  <div className="backdrop-blur-md bg-white/60 border border-white/50 rounded-2xl p-6 hover:bg-white/80 hover:border-blue-200/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl h-full">
                    <div className="flex flex-col h-full">
                      <div className="relative mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-slate-600 mb-3 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="mb-3">
                          <h4 className="font-semibold text-slate-800 mb-1 text-sm">What I did:</h4>
                          <p className="text-slate-600 text-sm">
                            {project.whatIDid}
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-800 mb-1 text-sm">Outcome:</h4>
                          <p className="text-slate-600 text-sm">
                            {project.outcome}
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-slate-200/50">
                        <a 
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group-hover:gap-3"
                        >
                          View Live
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
