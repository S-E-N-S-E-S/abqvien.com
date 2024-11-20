"use client";

// components/HoverImageSection.tsx
import React from 'react';

const HoverImageSection: React.FC = () => {
  const images = [
    { src: 'hover1.png', alt: 'Image 1', label: 'Label 1' },
    { src: 'hover2.png', alt: 'Image 2', label: 'Label 2' },
    { src: 'hover3.png', alt: 'Image 3', label: 'Label 3' },
    ];

  return (
    <div className="flex overflow-hidden pb-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group flex-1 overflow-hidden transition-all duration-500"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            <span className="text-white text-lg">{image.label}</span>
          </div> */}
        </div>
      ))}

      {/* Adjusted hover effect for horizontal growth */}
      <style jsx>{`
        .group:hover {
          flex-basis: 100%; /* Make the hovered image take more horizontal space */
        }
        .group:not(:hover) {
          flex-basis: 50%; /* Make non-hovered images shrink horizontally */
        }
      `}</style>
    </div>
  );
};

export default HoverImageSection;