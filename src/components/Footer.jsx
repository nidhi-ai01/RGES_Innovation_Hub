import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "../assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Programs", href: "#programs" },
    { name: "Partners", href: "#partners" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
  <div className="px-8 py-12 max-w-7xl mx-auto">
    
    {/* Grid */}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-10">
      
      {/* Brand - LEFT */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="RGES Logo"
            className="h-9 w-auto object-contain"
          />
          <div>
            <h3 className="text-lg font-semibold">RGES Innovation Hub</h3>
            <p className="text-xs text-slate-400">
              Zero to One Starts Here
            </p>
          </div>
        </div>

        <p className="text-sm w-auto text-slate-400">
  Empowering the next generation of founders to transform ideas into
  fundable startups through mentorship, validation, and community.
</p>

      </div>

      {/* Empty column (spacing helper) */}
      <div className="hidden lg:block" />

      {/* Quick Links - CENTER */}
      <div className="space-y-4 lg:justify-center">
        <h4 className="text-xs font-semibold uppercase tracking-wider">
          Quick Links
        </h4>
        <ul className="space-y-2">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact - RIGHT */}
      <div className="space-y-4 lg:justify-self-end">
        <h4 className="text-xs font-semibold uppercase tracking-wider">
          Contact Us
        </h4>
        <ul className="space-y-4 text-sm">
          <li>
            <a
              href="mailto:service@rgesinnovationhub.com"
              className="flex gap-2 text-slate-400 hover:text-white transition"
            >
              <Mail size={16} />
              service@rgesinnvationhub.com
            </a>
          </li>

          <li>
            <a
              href="tel:+918309721921"
              className="flex gap-2 text-slate-400 hover:text-white transition"
            >
              <Phone size={16} />
              +91 83097 21921
            </a>
          </li>

          <li className="flex gap-2 text-slate-400 max-w-xs">
            <MapPin size={46} />
            <span>
              101, Metro Avenue, Plot No. 28 & 29, Calvary Temple Rd,
              IDPL Employees Colony, Hafeezpet, Hyderabad, India
              
            </span>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-slate-900 mt-10 pt-6">
      <p className="text-xs  md:text-sm  text-slate-500 text-center">
        © {new Date().getFullYear()} RGESInnovation Hub. All rights reserved.
      </p>
    </div>

  </div>
</footer>


  );
};

export default Footer;
