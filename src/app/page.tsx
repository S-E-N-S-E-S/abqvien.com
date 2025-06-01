import React from "react";
import "../styles/globals.css";
import ClienteleSection from "./components/clientele";
import HoverImageSection from "./components/hover";
import TestimonialSection from "./components/testimonial";
import Footer from "./components/footer";
import Header from "./components/header";

const HomePage = () => {
  const areas = [
    { title: "RFA", icon: "/treatments/rfa.png" },
    { title: "Venaseal", icon: "/treatments/venaseal.png" },
    { title: "Varithena", icon: "/treatments/varithena/varithena.png" },
    { title: "Asclera", icon: "/treatments/asclera/image5.png" },
    { title: "Laser Ablation", icon: "/treatments/la/la_home.png" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-50 text-gray-500 font-sans">
      <Header />
      <main className="container max-w-max">
        <section
          className="parallax bg-fixed bg-cover bg-center h-screen mb-10 relative"
          style={{ backgroundImage: "url('/home/home2.png')" }}
        >
          {/* Dark overlay with blur */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            aria-hidden="true"
          ></div>

          {/* Content */}
          <div className="flex items-center justify-center h-full relative">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-6">
                Effective results | Painless Treatment 
              </h1>
              <h2 className="text-2xl">Non-Invasive Vein Treatments and Therapies </h2>
              <p className="text-xl">
                Providing comprehensive vascular care with a personal touch.
              </p>
            </div>
          </div>
        </section>

        <h2 className="text-3xl font-bold text-center text-sky-900 mb-10 pt-20">
          Understanding Vein Disease
        </h2>
        <HoverImageSection />

        <section className="max-w-7xl mx-auto py-20 mb-5">
          <h2 className="text-3xl font-bold text-center text-sky-900 mb-10">
            Procedures Performed
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-50 h-50 mb-4 h-52"
                />
                <p className="text-sky-700 font-medium">{area.title}</p>
              </div>
            ))}
          </div>
        </section>

        <h2 className="text-3xl font-bold text-center text-sky-900 mb-10 pt-5">Chronic Venous Insufficiency (CVI) Results:</h2>
        
        <ClienteleSection />

        <section className="max-w-6xl mx-auto py-12 mb-10 mt-10">
  <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 bg-white space-y-8 md:space-y-0 md:space-x-12">
    {/* Left Column: Text Content */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl text-sky-900 font-bold mb-6">
        Meet Dr. Satyaki Banerjee
      </h2>
      <p className="text-sky-700 leading-relaxed">
        Dr. Satyaki Banerjee is a Board-Certified and highly experienced Interventional Nephrologist. He completed his interventional training at Louisiana State University and served as a faculty member at the University of Tennessee as an interventionist. Dr. Banerjee is ASDIN Certified and has performed over 5,000 dialysis access procedures throughout his career.
        <br /><br />
        Currently, Dr. Banerjee serves as the lead vascular surgeon for Advanced Vascular in Albuquerque, NM. Advanced Vascular provides comprehensive care for patients across New Mexico, specializing in the treatment and maintenance of vascular access. Dr. Banerjee and the dedicated team at Advanced Vascular are committed to delivering high-quality care in a welcoming and comfortable environment, with a strong focus on excellent customer service.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/home/banerjee.png" // Replace with the actual path to your image
        alt="Dr. Satyaki Banerjee"
        className="w-1/2 h-1/2 rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

        {/* <section id="services" className="bg-white py-12 pb-20">
          <h2 className="text-2xl text-center font-bold mb-6 text-blue-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-900 mb-2">Service 1</h3>
              <p>Detail about service 1.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-900 mb-2">Service 2</h3>
              <p>Detail about service 2.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-900 mb-2">Service 3</h3>
              <p>Detail about service 3.</p>
            </div>
          </div>
        </section> */}

        <TestimonialSection />

        <Footer />

      </main>
    </div>
  );
};

export default HomePage;
