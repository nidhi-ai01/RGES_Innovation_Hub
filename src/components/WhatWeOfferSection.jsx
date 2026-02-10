import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WhatWeOfferSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const offerings = [
    {
      id: 1,
      icon: CheckCircle,
      title: "Idea Validation",
      description:
        "Structured workshops to test your assumptions and validate product-market fit.",
      features: [
        "Customer discovery",
        "Market research",
        "Competitive analysis",
        "MVP planning",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: 2,
      icon: Users,
      title: "Founder Mentorship",
      description:
        "1-on-1 guidance from experienced entrepreneurs who've been in your shoes.",
      features: [
        "Weekly mentor sessions",
        "Strategic planning",
        "Problem solving",
        "Network access",
      ],
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      id: 3,
      icon: BookOpen,
      title: "Startup Bootcamps",
      description:
        "Intensive programs covering everything from ideation to pitch preparation.",
      features: [
        "Product development",
        "Business model design",
        "Team building",
        "Go-to-market strategy",
      ],
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-100",
    },
    {
      id: 4,
      icon: DollarSign,
      title: "Investor Access",
      description:
        "Connect with angel investors, VCs, and access to funding opportunities.",
      features: [
        "Pitch deck review",
        "Investor introductions",
        "Funding readiness",
        "Cap table planning",
      ],
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-100",
    },
    {
      id: 5,
      icon: Calendar,
      title: "Demo Days",
      description:
        "Showcase your startup to investors and connect with fellow founders.",
      features: [
        "Quarterly demo days",
        "Founder meetups",
        "Industry events",
        "Community support",
      ],
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-100",
    },
    {
      id: 6,
      icon: ArrowRight,
      title: "And Much More",
      description:
        "We are constantly evolving to meet the needs of our founders.",
      features: [
        "Co-working space",
        "Legal support",
        "Cloud credits",
        "Hiring assistance",
      ],
      gradient: "from-indigo-500 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-100",
    },
  ];

  return (
    <section
      aria-labelledby="offer-heading"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Premium Services</span>
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <h2
            id="offer-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            What We Offer
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Comprehensive support for every stage of your startup journey.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;

            return (
              <div
                key={offering.id}
                className="group relative animate-fade-in-up hover-lift card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(offering.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background */}
                <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {String(offering.id).padStart(2, "0")}
                  </div>

                  {/* Icon Section with Gradient Background */}
                  <div
                    className={`bg-gradient-to-br ${offering.bgGradient} p-8 flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    {/* Icon */}
                    <div className={`bg-gradient-to-br ${offering.gradient} p-6 rounded-2xl text-white shadow-lg relative z-10 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="w-8 h-8 animate-pulse" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3
                      className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed min-h-[48px] group-hover:text-slate-700 transition-colors duration-300">
                      {offering.description}
                    </p>

                    <ul className="space-y-3 pt-6 border-t border-slate-100 flex-grow">
                      {offering.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300 animate-fade-in-left"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 group-hover:text-purple-600 transition-colors duration-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
