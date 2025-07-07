
import React from 'react';
import { Wrench, Lightbulb, Clock, Mail, Calendar } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Wrench,
      title: "My Stack",
      description: "Webflow, Framer, Firebase AI Studio, ChatGPT, Figma — smart tools for fast builds"
    },
    {
      icon: Lightbulb,
      title: "Track Record",
      description: "MVPs launched, AI tools shipped, brands built, landing pages that convert"
    },
    {
      icon: Clock,
      title: "Speed Promise",
      description: "Most projects ship in under 7 days — because your time matters"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* About Me Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Why Founders Choose Me
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              {/* Portrait */}
              <div className="lg:w-1/3">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 backdrop-blur-md border border-white/50 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80" 
                      alt="Muhammad Abdullah - MVP developer and AI-first designer helping startup founders launch fast"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                </div>
              </div>
              
              {/* About Text */}
              <div className="lg:w-2/3 text-left">
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                  I'm <span className="font-bold text-slate-900">Muhammad Abdullah</span> — an AI-first developer who gets founders. 
                  <br /><br />
                  I've been where you are: great idea, limited time, need to ship fast. 
                  <br /><br />
                  That's why I specialize in <strong>end-to-end MVP launches</strong> using no-code tools and AI automation. Solo founder-friendly. No team drama. Just smart builds that work.
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="group">
                  <div className="backdrop-blur-md bg-white/60 border border-white/50 rounded-2xl p-6 hover:bg-white/80 hover:border-blue-200/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <div className="backdrop-blur-md bg-white/60 border border-white/50 rounded-3xl p-12 hover:bg-white/70 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to Stop Waiting?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                That idea deserves to see the light of day. 
                <br />
                Let's build something people actually want to use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium text-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Let's Ship It
                </a>
                <a 
                  href="mailto:hello@muhammadabdullah.dev"
                  className="inline-flex items-center gap-3 bg-white/80 border border-blue-200 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Quick Email
                </a>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <div className="flex items-center justify-center gap-2 text-slate-500">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-white" aria-label="Satisfied founder client"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 border-2 border-white" aria-label="Happy startup client"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-2 border-white" aria-label="Successful MVP launch"></div>
                  </div>
                  <span className="text-sm font-medium">Trusted by Smart Founders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
