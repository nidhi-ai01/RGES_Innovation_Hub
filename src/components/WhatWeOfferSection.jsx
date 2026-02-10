import React, { useState } from "react";
import {
  CheckCircle,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  ArrowRight,
} from "lucide-react";

const WhatWeOfferSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const offerings = [
    {
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
      className="py-20 md:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="offer-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
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
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Icon Section with Gradient Background */}
                <div
                  className={`bg-gradient-to-br ${offering.bgGradient} p-8 flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${offering.gradient} p-6 rounded-2xl text-white shadow-lg relative z-10 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed min-h-[48px]">
                    {offering.description}
                  </p>

                  <ul className="space-y-3 pt-6 border-t border-slate-100">
                    {offering.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
