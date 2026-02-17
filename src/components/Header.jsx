import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onApplyClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "programs", label: "Programs" },
    { id: "blog", label: "Blog" },
    { id: "archives", label: "Archives" },
    { id: "partners", label: "Partners" },
  ];

  const handleNavigation = (item) => {
    if (item.id === "archives") {
      navigate("/archives");
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-slate-200 py-3 shadow-sm"
            : "bg-transparent border-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logoImg}
                alt="RGES Innovation Hub Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain"
              />

              <div>
                <h1
                  className={`text-sm md:text-base font-bold tracking-tight ${
                    scrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  RGES Innovation Hub
                </h1>
                <p
                  className={`text-[10px] md:text-xs font-semibold uppercase ${
                    scrolled ? "text-blue-600" : "text-blue-200"
                  }`}
                >
                  Zero to One Starts Here
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    scrolled ? "text-slate-600" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={onApplyClick}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm ${
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
              className={`md:hidden p-2 rounded-lg ${
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
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left py-2 text-base font-medium text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t">
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
