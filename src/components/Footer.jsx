import React from "react";
import {
  Mail,
  Phone,
  MapPin,
 
} from "lucide-react";

const Footer = ({ logo }) => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Programs", href: "#programs" },
    { name: "Partners", href: "#partners" },
  ];

 

  return (
    <footer className="bg-slate-950 text-white">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {logo && (
                <img
                  src={logo}
                  alt="RGES Logo"
                  className="h-9 w-auto object-contain brightness-0 invert"
                />
              )}

              <div>
                <h3 className="text-lg font-semibold">
                  RGES Innovation Hub
                </h3>
                <p className="text-xs text-slate-400">
                  Zero to One Starts Here
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md mb-5 leading-relaxed">
              Empowering the next generation of founders to transform ideas into
              fundable startups through mentorship, validation, and community.
            </p>

           

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
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

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@rgesinnovationhub.com"
                  className="flex items-start gap-2 text-slate-400 hover:text-white transition"
                >
                  <Mail size={16} />
                  hello@rgesinnovationhub.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+918309721921"
                  className="flex items-start gap-2 text-slate-400 hover:text-white transition"
                >
                  <Phone size={16} />
                  +91 83097 21921
                </a>
              </li>

              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} />
                <span>
                  101, Metro Avenue, Plot No. 28 & 29, Calvary Temple Rd, IDPl Employees Colony, Hafeezpet
                  <br />
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-900 mt-10 pt-6 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} RGES Innovation Hub. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
