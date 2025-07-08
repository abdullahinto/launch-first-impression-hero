import React from "react";
import { ArrowRight, Calendar, Rocket, Zap, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      id="home"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/30 border border-white/40 text-sm font-medium text-slate-700 mb-8 hover:bg-white/40 transition-all duration-300 group">
            <Sparkles className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
            Helping founders launch faster
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Still waiting to</span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              launch that idea?
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I help busy founders and solo builders launch their{" "}
            <strong>MVPs, AI tools, or landing pages</strong> — fast, clean, and
            conversion-optimized. No team required. Just smart tools and proven
            systems.
          </p>

          {/* Name & Title */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">
              Muhammad Abdullah
            </h2>
            <p className="text-lg text-slate-600 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              DM for MVPs, AI tools & conversion-first design
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Let's Talk
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>

            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-8 py-4 backdrop-blur-md bg-white/30 border border-white/40 text-slate-700 font-semibold rounded-xl hover:bg-white/50 transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              View Work
            </a>
          </div>

          {/* Glass Panel with Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Fast Launch</h3>
              <p className="text-slate-600 text-sm">
                Get your MVP live in weeks, not months
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">AI-Powered</h3>
              <p className="text-slate-600 text-sm">
                Smart tools and automation built-in
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-6 hover:bg-white/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Conversion-First
              </h3>
              <p className="text-slate-600 text-sm">
                Designed to turn visitors into customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
