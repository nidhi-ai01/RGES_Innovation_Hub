import React from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Launching Our First Cohort",
      description:
        "We're excited to announce the launch of our inaugural startup accelerator cohort! Selected 15 innovative teams from across India will be joining us for an intensive 12-week program.",
      date: "Jan 2025",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 5,
    },
    {
      id: 2,
      title: "Mentorship Workshop Success",
      description:
        "Our first mentorship workshop brought together 30+ entrepreneurs and industry experts. The session focused on market validation and pitch perfection, providing valuable insights for early-stage startups.",
      date: "Dec 2024",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 8,
    },
    {
      id: 3,
      title: "Partnership with Tech Leaders",
      description:
        "RGES Innovation Hub partners with leading technology companies to provide startups with access to cutting-edge tools, resources, and mentorship. Excited to announce our collaboration with industry pioneers.",
      date: "Nov 2024",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 6,
    },
    {
      id: 4,
      title: "Success Story: From Idea to Series A",
      description:
        "One of our portfolio startups has successfully raised Series A funding! Learn how they transformed their idea into a scalable product and attracted investor attention in just 8 months.",
      date: "Oct 2024",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 4,
    },
    {
      id: 5,
      title: "Idea Validation Workshop Completed",
      description:
        "Our 3-day intensive idea validation workshop concluded with remarkable results. Participants learned customer discovery techniques and validated their business assumptions through real market interactions.",
      date: "Sep 2024",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 7,
    },
    {
      id: 6,
      title: "Building Community for Founders",
      description:
        "Community is at the heart of everything we do. Join our growing network of 200+ founders, mentors, and supporters who are committed to building the next generation of innovative companies.",
      date: "Aug 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      photos: 9,
    },
  ];

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-20">
          <h2
            id="blog-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Watch Our Journey
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Discover the latest updates, success stories, and insights from the RGES Innovation Hub ecosystem.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-100 h-48 md:h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Photo Count Badge */}
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  📷
                  <span>{blog.photos} Photos</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Date and Location */}
                <div className="flex items-center gap-4 mb-3 text-slate-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{blog.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* View Details Button */}
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm md:text-base transition-colors group/btn">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
