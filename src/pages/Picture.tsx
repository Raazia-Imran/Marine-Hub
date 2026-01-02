import { useState } from "react";
import { X, Download, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";



// Utility function for conditional classnames
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pictures() {
    const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);



  // Gallery images - replace with your actual image paths
  const galleryImages = [
    { id: 1, src: "/images/img-01.png", title: "Ocean Research Vessel" },
    { id: 2, src: "/images/img-02.png", title: "Marine Data Collection" },
    { id: 3, src: "/images/img-03.png", title: "Coastal Monitoring" },
    { id: 4, src: "/images/img-04.png", title: "Team Collaboration" },
    { id: 5, src: "/images/img-05.png", title: "Laboratory Analysis" },
    { id: 6, src: "/images/img-06.png", title: "Underwater Survey" },
    { id: 7, src: "/images/img-07.png", title: "Port Infrastructure" },
    { id: 8, src: "/images/img-08.png", title: "Climate Research" },
    { id: 9, src: "/images/img-09.png", title: "Ocean Technology" },
    { id: 10, src: "/images/img-10.png", title: "Marine Biodiversity" },
    { id: 11, src: "/images/img-11.png", title: "Data Analytics" },
  ];

  const filteredImages = galleryImages;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    } else {
      setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  const handleDownload = () => {
    if (selectedImage !== null) {
      const link = document.createElement('a');
      link.href = filteredImages[selectedImage].src;
      link.download = filteredImages[selectedImage].title;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-[#0a192f] text-white py-16 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-72 h-72 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <button
                onClick={() => navigate("/data")}
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6"
                >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Ocean Data</span>
            </button>


            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Research & Fieldwork{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400">
                Gallery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of ocean research, monitoring activities, and collaborative fieldwork across Pakistan's.
            </p>
          </div>
        </div>
      </div>


      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-slate-600 text-center">
            Showing <span className="font-semibold text-slate-900">{galleryImages.length}</span> images
          </p>
        </div>

        {/* Grid Layout */}
    
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
                <GalleryCard
                key={image.id}
                image={image}
                onClick={() => openLightbox(index)}
                masonry
                />
            ))}
            </div>
        </div>


      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="absolute top-4 right-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm z-10"
          >
            <Download className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="container mx-auto">
                <h3 className="text-xl font-bold mb-1">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm text-slate-300">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>

          {/* Keyboard Navigation Hint */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-slate-400 text-sm hidden md:block">
            Use ← → arrow keys to navigate
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#0a192f] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Contribute Your Research?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join our collaborative platform and share your ocean research and fieldwork with the community.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-full text-lg shadow-lg"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </div>
  );
}

// Gallery Card Component
function GalleryCard({ 
  image, 
  onClick,
  masonry = false 
}: { 
  image: { src: string; title: string };
  onClick: () => void;
  masonry?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative group cursor-pointer overflow-hidden rounded-xl bg-slate-200 shadow-md hover:shadow-2xl transition-all duration-300",
        masonry ? "break-inside-avoid mb-6" : "aspect-[4/3]"
      )}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Zoom Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
          {image.title}
        </h3>
      </div>
    </div>
  );
}