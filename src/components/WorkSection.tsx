
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      name: "InkWorthy Creations",
      description: "Redesigned a high-converting landing page for a startup content brand",
      whatIDid: "Rebuilt their homepage with conversion-first design principles to boost lead generation",
      outcome: "Visitors now understand their offer immediately, leading to 3x stronger engagement rates",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      altText: "InkWorthy Creations website homepage showing clean design and clear call-to-action"
    },
    {
      name: "Junood Creation", 
      description: "Launched a clean, conversion-ready clothing brand site fast",
      whatIDid: "Built their complete brand website in under a week using smart templates and AI tools",
      outcome: "Mobile-optimized site that builds instant customer trust and drives sales",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      altText: "Junood Creation clothing brand website with modern layout and product showcase"
    },
    {
      name: "AboutYouAI",
      description: "Built an AI-powered bio generator tool in under a week",
      whatIDid: "Designed and coded a smart, user-friendly AI tool for creators to auto-generate professional bios",
      outcome: "Viral growth with users loving the no-hassle tool that actually works",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      altText: "AboutYouAI tool interface showing AI-powered bio generation for content creators"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Live Projects That Ship Fast
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Real MVPs, tools, and sites I've helped founders launch — fast builds that convert visitors into customers
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
                      alt={projects[0].altText}
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
                      <h4 className="font-semibold text-slate-800 mb-2">The Build:</h4>
                      <p className="text-slate-600">
                        {projects[0].whatIDid}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-2">The Results:</h4>
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
                      See It Live
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
                          alt={project.altText}
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
                          <h4 className="font-semibold text-slate-800 mb-1 text-sm">The Build:</h4>
                          <p className="text-slate-600 text-sm">
                            {project.whatIDid}
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-800 mb-1 text-sm">The Results:</h4>
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
                          See It Live
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
