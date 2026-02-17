import React, { useState, useMemo } from "react";

/*
  Import ALL images inside:
  src/assets/archives and its subfolders
*/
const images = import.meta.glob(
  "../assets/archives/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true, import: "default" }
);

export default function ArchivesPage() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const groupedData = useMemo(() => {
    const data = {};

    Object.entries(images).forEach(([path, src]) => {
      // Example path:
      // ../assets/archives/SCSC Conclave 2025/image.jpg
      const parts = path.split("/");
      const folderName = parts[3]; 

      if (!data[folderName]) {
        data[folderName] = [];
      }

      data[folderName].push(src);
    });

    return data;
  }, []);

  // ======================
  // IMAGE VIEW
  // ======================
  if (selectedFolder) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <button
          onClick={() => setSelectedFolder(null)}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back to Events
        </button>

        <h2 className="text-2xl font-bold mb-8 text-center">
          {selectedFolder}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groupedData[selectedFolder]?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="event"
              onClick={() => setSelectedImage(img)}
              className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="preview"
              className="max-h-[90%] max-w-[90%] rounded-lg"
            />
          </div>
        )}
      </div>
    );
  }

  // ======================
  // FOLDER VIEW
  // ======================
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Achievements
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(groupedData).map((folder, index) => (
          <button
            key={index}
            onClick={() => setSelectedFolder(folder)}
            className="p-6 rounded-xl shadow hover:shadow-xl border text-center font-medium transition hover:scale-105"
          >
            {folder}
          </button>
        ))}
      </div>
    </div>
  );
}
