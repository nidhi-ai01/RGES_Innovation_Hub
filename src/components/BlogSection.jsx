import React from "react";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Launching Our First Cohort",
      description:
        "We're excited to announce the launch of our inaugural startup accelerator cohort! Selected 15 innovative teams from across India will be joining us for an intensive 12-week program.",
      date: "Jan 2025",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 5,
      gradient: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      title: "Mentorship Workshop Success",
      description:
        "Our first mentorship workshop brought together 30+ entrepreneurs and industry experts. The session focused on market validation and pitch perfection, providing valuable insights for early-stage startups.",
      date: "Dec 2024",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 8,
      gradient: "from-purple-600 to-purple-400",
    },
    {
      id: 3,
      title: "Partnership with Tech Leaders",
      description:
        "RGES Innovation Hub partners with leading technology companies to provide startups with access to cutting-edge tools, resources, and mentorship. Excited to announce our collaboration with industry pioneers.",
      date: "Nov 2024",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 6,
      gradient: "from-green-600 to-green-400",
    },
    {
      id: 4,
      title: "Success Story: From Idea to Series A",
      description:
        "One of our portfolio startups has successfully raised Series A funding! Learn how they transformed their idea into a scalable product and attracted investor attention in just 8 months.",
      date: "Oct 2024",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 4,
      gradient: "from-amber-600 to-amber-400",
    },
    {
      id: 5,
      title: "Idea Validation Workshop Completed",
      description:
        "Our 3-day intensive idea validation workshop concluded with remarkable results. Participants learned customer discovery techniques and validated their business assumptions through real market interactions.",
      date: "Sep 2024",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 7,
      gradient: "from-pink-600 to-pink-400",
    },
    {
      id: 6,
      title: "Building Community for Founders",
      description:
        "Community is at the heart of everything we do. Join our growing network of 200+ founders, mentors, and supporters who are committed to building the next generation of innovative companies.",
      date: "Aug 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      photos: 9,
      gradient: "from-red-600 to-red-400",
    },
  ];

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Our Updates</span>
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Watch Our Journey
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Discover the latest updates, success stories, and insights from the RGES Innovation Hub ecosystem.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:border-slate-300 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 h-48 md:h-56">
                <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`}></div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Animated overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                {/* Photo Count Badge - Enhanced */}
                <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg transform group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                  <span className="animate-pulse">📷</span>
                  <span>{blog.photos} Photos</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-7 flex flex-col h-full">
                {/* Date and Location */}
                <div className="flex items-center gap-4 mb-4 text-slate-500 text-sm">
                  <div className="flex items-center gap-1.5 group/date">
                    <Calendar className="w-4 h-4 group-hover/date:text-blue-600 transition-colors duration-300" />
                    <span className="group-hover/date:text-slate-700 transition-colors duration-300">{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 group/location">
                    <MapPin className="w-4 h-4 group-hover/location:text-blue-600 transition-colors duration-300" />
                    <span className="group-hover/location:text-slate-700 transition-colors duration-300">{blog.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-5 line-clamp-3 flex-grow group-hover:text-slate-700 transition-colors duration-300">
                  {blog.description}
                </p>

                {/* View Details Button - Enhanced */}
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base transition-all duration-300 group/btn relative">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:text-blue-700 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 w-0 group-hover/btn:w-full transition-all duration-300"></div>
                </button>
              </div>

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
