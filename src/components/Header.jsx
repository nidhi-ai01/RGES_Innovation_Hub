import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = ({ onApplyClick, logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "programs", label: "Programs" },
    { id: "partners", label: "Partners" },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200 py-3 shadow-sm"
            : "bg-transparent border-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="relative">
                {logo ? (
                  <img
                    src={""}
                    alt="RGES Innovation Hub Logo"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 bg-slate-900 rounded-lg"></div>
                )}
              </div>

              <div>
                <h1
                  className={`text-sm md:text-base font-bold tracking-tight transition-colors ${
                    scrolled ? "text-slate-900" : "text-white"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  RGES Innovation Hub
                </h1>
                <p
                  className={`text-[10px] md:text-xs font-semibold tracking-wide uppercase ${
                    scrolled ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  Zero to One Starts Here
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    scrolled
                      ? activeSection === item.id
                        ? "text-blue-600"
                        : "text-slate-600"
                      : activeSection === item.id
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={onApplyClick}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  scrolled
                    ? "bg-slate-900 text-white hover:bg-slate-800"
                    : "bg-white text-slate-900 hover:bg-blue-50"
                }`}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 text-base font-medium border-l-2 pl-4 transition-colors ${
                  activeSection === item.id
                    ? "border-blue-600 text-blue-600 bg-blue-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onApplyClick}
                className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
