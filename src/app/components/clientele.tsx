// components/ClienteleSection.jsx
import Image from "next/image";

const ClienteleSection = () => {
  // Replace these image paths with your images or use the Image component with proper paths
  const images = [
    "/2b.jpg",
    "/2a.jpg",
    "/3b.jpg",
    "/3a.jpg",
    "/4b.jpg",
    "/4a.jpg",
    "/5b.jpg",
    "/5a.jpg",
  ];

  return (
    <section className="relative overflow-hidden py-10 bg-white pb-20">
      <div className="relative">
        {/* Marquee Container */}
        <h2 className="flex justify-center text-black text-3xl">
          Results We Produced
        </h2>
        <div
          className="flex items-center animate-marquee h-80"
          style={{ width: "200%" }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "120px", height: "120px", margin: "0 16px" }} // Adjust spacing here
            >
              <Image
                src={src}
                alt={`Image ${index}`}
                width={120}
                height={120}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
