import React, { useState } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Startup Founders");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Google Drive folder structure - organized by categories
  const galleryData = {
    "Startup Founders": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example1",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example2",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example3",
    ],
    "Investment Events": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example4",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example5",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example6",
    ],
    "Mentorship Sessions": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example7",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example8",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example9",
    ],
    "Success Stories": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example10",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example11",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example12",
    ],
    "Community Events": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example13",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example14",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example15",
    ],
    "Awards & Recognition": [
      "https://drive.google.com/uc?export=view&id=1n5J8k_example16",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example17",
      "https://drive.google.com/uc?export=view&id=1n5J8k_example18",
    ],
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0
        ? galleryData[selectedCategory].length - 1
        : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryData[selectedCategory].length - 1
        ? 0
        : prev + 1
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 sm:mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Gallery</span>
            <Sparkles className="w-5 h-5 text-purple-600" />
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Moments That Matter
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Explore our journey through images of innovation, collaboration, and impact
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: "100ms" }}>
          {Object.keys(galleryData).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-slate-200 text-slate-900 hover:bg-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Gallery Display */}
        <div className="bg-white rounded-3xl border border-slate-200/60 overflow-hidden hover:border-slate-300 hover:shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6" style={{ animationDelay: "200ms" }}>
          {/* Image Container */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
            <div className="relative w-full aspect-video md:aspect-[16/9]">
              <img
                src={galleryData[selectedCategory][currentImageIndex]}
                alt={`${selectedCategory} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/1200x600?text=Image+Not+Available";
                }}
              />

              {/* Image Overlay - Counter and Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-end justify-end p-6">
                <p className="text-white font-bold text-lg md:text-xl">
                  {currentImageIndex + 1} / {galleryData[selectedCategory].length}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails Strip */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-slate-50 to-slate-100 border-t border-slate-200">
            <p className="text-sm md:text-base font-semibold text-slate-700 mb-4">
              Select an image:
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {galleryData[selectedCategory].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative rounded-lg overflow-hidden border-3 transition-all duration-300 ${
                    index === currentImageIndex
                      ? "border-purple-600 scale-110 shadow-lg"
                      : "border-slate-300 hover:border-slate-400 hover:scale-105"
                  }`}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24">
                    <img
                      src={galleryData[selectedCategory][index]}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/96x96?text=+";
                      }}
                    />
                  </div>
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200/30 text-center animate-in fade-in slide-in-from-bottom-6" style={{ animationDelay: "300ms" }}>
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
            Each moment captured here represents our commitment to building an <span className="font-bold text-purple-600">innovative ecosystem</span> where ideas transform into impact. Browse through our memories and be part of our journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
