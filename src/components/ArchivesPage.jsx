import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Automatically import ALL images
*/
const images = import.meta.glob(
  "../assets/archives/**/*.{png,jpg,jpeg,PNG,JPEG,JPG}",
  { eager: true, import: "default" }
);

export default function ArchivesPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const groupedData = useMemo(() => {
    const data = {};
    Object.entries(images).forEach(([path, src]) => {
      const parts = path.split("/");
      const folderName = parts[3];

      if (!data[folderName]) data[folderName] = [];
      data[folderName].push(src);
    });
    return data;
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // ================= IMAGE VIEW =================
  if (selectedFolder) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-32 pb-20 text-white">

        <button
          onClick={() => {
            setSelectedImage(null);
            setSelectedFolder(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mb-12 text-blue-400 font-semibold hover:text-blue-300 transition"
        >
          ← Back to Events
        </button>

        <h2 className="text-4xl font-bold mb-16 text-center tracking-wide">
          {selectedFolder}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          {groupedData[selectedFolder].map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-72 object-cover rounded-2xl"
              />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt=""
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ================= FOLDER VIEW =================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-32 pb-20 text-white">

      <h1 className="text-5xl font-bold mb-20 text-center tracking-wide">
        Archives
        
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {Object.keys(groupedData).map((folder, index) => {
          const previewImage = groupedData[folder][0];

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSelectedFolder(folder);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl cursor-pointer group transition duration-500"
            >
              {/* Hover Preview */}
              <img
                src={previewImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition duration-500"
              />

              {/* Gradient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500" />

              {/* Content */}
              <div className="relative p-10 text-center">
                <h3 className="text-xl font-semibold tracking-wide">
                  {folder}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
