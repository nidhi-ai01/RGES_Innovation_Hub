import React, { useState } from "react";
import {
  Lightbulb,
  Search,
  Users,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const JourneySection = () => {
  const journeySteps = [
    {
      icon: Lightbulb,
      title: "Idea Discovery",
      description:
        "Identify problems worth solving and validate market opportunities.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
    },
    {
      icon: Search,
      title: "Market Validation",
      description:
        "Test your assumptions, understand your customers, and refine your value proposition.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Mentorship & Strategy",
      description:
        "Get guidance from experienced founders and build your go-to-market strategy.",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500",
    },
    {
      icon: Rocket,
      title: "MVP & Early Traction",
      description:
        "Build your minimum viable product and acquire your first customers.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500",
    },
    {
      icon: TrendingUp,
      title: "Funding & Growth",
      description:
        "Become investment-ready and secure funding to scale your startup.",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-400",
    },
  ];

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto">
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your Zero-to-One Journey
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A structured path from idea to fundable startup, designed for
            first-time founders.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient Timeline Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 via-amber-500 to-yellow-400"></div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 via-amber-500 to-yellow-400"></div>

          {/* Timeline Steps */}
          <div className="space-y-8 md:space-y-20">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div
                    className={`hidden md:flex items-center ${
                      isLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`w-full md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                    >
                      <div
                        className={`bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                          isLeft ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <h3
                          className="text-xl md:text-2xl font-bold text-slate-900 mb-3"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="w-full md:w-2/12 flex justify-center relative z-10">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${step.bgColor} flex items-center justify-center text-white shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-110`}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                    </div>

                    {/* Spacer for card alignment */}
                    <div className="w-full md:w-5/12"></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start gap-4 pl-16">
                    {/* Icon */}
                    <div className="absolute left-0 top-0 relative z-10">
                      <div
                        className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center text-white shadow-lg border-4 border-white transform transition-transform duration-300 active:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="w-full pt-1">
                      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3
                          className="text-lg font-bold text-slate-900 mb-2"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors duration-200">
            Start Your Journey Today
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
