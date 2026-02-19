import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Automatically import ALL images
  inside assets/archives and its subfolders
*/
const images = import.meta.glob(
  "../assets/archives/**/*.{png,jpg,jpeg,PNG,JPEG,JPG}",
  { eager: true, import: "default" }
);

export default function ArchivesPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Group images by folder
  const groupedData = useMemo(() => {
    const data = {};

    Object.entries(images).forEach(([path, src]) => {
      const parts = path.split("/");
      const folderName = parts[3]; // archives / FolderName / image

      if (!data[folderName]) {
        data[folderName] = [];
      }

      data[folderName].push(src);
    });

    return data;
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // ===============================
  // IMAGE VIEW
  // ===============================
  if (selectedFolder) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 pt-32 pb-16">
        
        {/* Back Button */}
        <button
          onClick={() => {
            setSelectedImage(null);
            setSelectedFolder(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mb-10 text-blue-600 font-semibold hover:underline"
        >
          ← Back to Events
        </button>

        <h2 className="text-3xl font-bold mb-12 text-center">
          {selectedFolder}
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {groupedData[selectedFolder].map((img, index) => (
            <motion.img
              key={index}
              variants={itemVariants}
              src={img}
              alt="event"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setSelectedImage(img)}
              className="rounded-2xl shadow-lg cursor-pointer"
            />
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="preview"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ===============================
  // FOLDER VIEW
  // ===============================
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 pt-32 pb-16">
      
      <h1 className="text-4xl font-bold mb-16 text-center">
        Achievements
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {Object.keys(groupedData).map((folder, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedFolder(folder);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-8 rounded-2xl border bg-white shadow-md hover:shadow-xl transition-all duration-300 text-lg font-medium"
          >
            {folder}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
