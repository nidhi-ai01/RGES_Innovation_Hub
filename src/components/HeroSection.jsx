import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/HerSection-bg-video.mp4";
import mobileVideo from "../assets/mobile-bg-video.mp4";

const HeroSection = () => {
  const text = "Come Fail, Learn and Build";
  const [displayText, setDisplayText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const typingRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const startTyping = () => {
      setDisplayText("");
      let i = 0;

      typingRef.current = setInterval(() => {
        i++;
        setDisplayText(text.slice(0, i));

        if (i === text.length) {
          clearInterval(typingRef.current);
          typingRef.current = null;
          
          // Restart animation after 2 seconds
          setTimeout(startTyping, 2000);
        }
      }, 60);
    };

    startTyping();

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={isMobile ? mobileVideo : heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 bg-slate-900 border border-slate-800"
          >
            <span
              className="text-xs font-semibold text-blue-400 uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {displayText}
              <span className="ml-0.5 animate-pulse">|</span>
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Zero to One
            <br />
            <span className="text-slate-400">Starts Here</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Transform your idea into a fundable startup with hands-on
            mentorship, validation programs, and a founder-led community.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Validate Your Idea
            </button>

            <button
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-900 text-white border border-slate-700 hover:border-slate-600 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <div className="w-[1px] h-12 bg-slate-800"></div>
        <span
          className="text-[10px] uppercase tracking-widest text-slate-600 font-medium"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
