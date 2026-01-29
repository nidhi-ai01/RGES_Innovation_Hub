import React from "react";
import { ExternalLink } from "lucide-react";

const PartnersSection = ({ partner1, partner2, intellirmLogo }) => {

  const partners = [
    {

      name: "IntelliRMS",
      logo: intellirmLogo,
      link: "#",
      description: "Recruitment Management System",
    },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Partners
          </h2>
          <p className="text-gray-600 mt-2">
            Organizations we collaborate with
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border rounded-lg p-5
                         flex flex-col items-center text-center
                         shadow-sm transition-all duration-300
                         hover:shadow-md hover:-translate-y-1 hover:border-blue-500"
            >
              {/* Logo */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 object-contain mb-4
                           transition-transform duration-300
                           group-hover:scale-105"
              />

              {/* Name */}
              <h3 className="text-base font-semibold text-gray-900">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-1 mb-3">
                {partner.description}
              </p>

              {/* Link */}
              <div
                className="flex items-center gap-2 text-sm font-medium
                           text-blue-600 transition-colors
                           group-hover:text-blue-700"
              >
                Visit Website
                <ExternalLink size={14} />
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
