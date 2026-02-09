import React, { useState } from "react";
import {
  Target,
  Users,
  Rocket,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Target,
      title: "Idea to Impact",
      description:
        "We help you validate and execute your ideas with practical, execution-driven support.",
    },
    {
      icon: Users,
      title: "Founder-Led",
      description:
        "Built by founders, run for founders. We understand the zero-to-one journey.",
    },
    {
      icon: Rocket,
      title: "Zero-to-One",
      description:
        "Focus on early ideation and execution, not late-stage scaling.",
    },
    {
      icon: Award,
      title: "Funding Ready",
      description:
        "Become investment-ready through mentorship, validation, and strategic guidance.",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-24 text-center">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight text-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            About RGES Innovation Hub
          </h2>

         <div className="flex flex-col items-center justify-center text-center">
  

  <p
    
    className="text-lg md:text-xl text-slate-600 max-w-6xl mx-auto leading-relaxed text-center font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
  >
    RGES Innovation Hub is a startup-driven ecosystem built to
    accelerate ideas into scalable, market-ready digital products.
    Focused on{" "}
    <strong className="text-slate-900 font-semibold">
      Cyber Security, Full-Stack Development, and Artificial
      Intelligence
    </strong>
    .
  </p>
</div>


        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 bg-white border transition-all duration-300 rounded-xl
                  ${isHovered ? "border-blue-600 shadow-lg" : "border-slate-200"}`}
              >
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg mb-6 transition-colors duration-300 
                    ${isHovered ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement - Technical Design */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden p-8 md:p-16">
          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Our Mission
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Empowering the Next Generation of Founders
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We exist to help founders move from idea to impact. Through
                practical mentorship, market validation, and a community-first
                approach.
              </p>

              <button className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors">
                <span>Join Our Community</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
