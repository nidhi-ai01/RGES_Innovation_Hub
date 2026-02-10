import React from "react";
import { ExternalLink } from "lucide-react";
import intellirmLogo from "../assets/intellirmLogo.jpg";

const PartnersSection = () => {
  const partners = [
    {
      name: "IntelliRMS",
      logo: intellirmLogo,
      link: "https://intellirms.com",
      description: "Smart Solutions for Risk Management",
    },
  ];

  return (
    <section id="partners" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Partners
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Organizations we collaborate with to support our founders
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 gap-8 justify-center w-full">

            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full max-w-md bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:border-blue-600 transition-all duration-300"
                >
                {/* Logo Container */}
                <div className="w-full h-32 flex items-center justify-center mb-6 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3
                  className="text-xl md:text-2xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base mb-6 flex-grow">
                  {partner.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                  Visit Website
                  <ExternalLink size={16} />
                </div>
              </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
