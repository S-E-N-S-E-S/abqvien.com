import React from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import TestimonialSection from "@/app/components/testimonial";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";


const Varicose = () => {

  const exampleFaqs = [
    {
      question: "What are varicose veins?",
      answer: "Varicose veins are enlarged, twisted veins that most commonly occur in the legs and feet due to weakened vein walls and faulty valves. They are often visible under the skin and may appear blue or purple.",
    },
    {
      question: "What are the symptoms of varicose veins?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Bulging, rope-like veins under the skin</li>
          <li>Aching, throbbing, or heaviness in the legs</li>
          <li>Swelling in the lower legs and ankles</li>
          <li>Itching or skin discoloration around the affected veins</li>
          <li>Night cramps or restless legs</li>
        </ul>
      ),
    },
    {
      question: "How are varicose veins diagnosed?",
      answer: "We conduct a physical exam and may recommend a duplex ultrasound to evaluate blood flow and check for valve dysfunction or clots.",
    },
    {
      question: "Is treatment painful?",
      answer: "Most modern treatments are minimally invasive and performed with local anesthesia. Patients typically experience mild discomfort and quick recovery.",
    },
    {
      question: "How long is the recovery time?",
      answer: "Recovery is usually fast. Many patients return to normal activities within 1–2 days, though wearing compression stockings and avoiding strenuous activity for a short period may be advised.",
    },
    {
      question: "Can varicose veins come back after treatment?",
      answer: "While treatment is highly effective, new varicose veins may develop over time, especially if underlying risk factors persist. Regular monitoring and lifestyle changes help reduce recurrence.",
    },
  ];


  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-500 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="px-4 py-8 space-y-12 max-w-full mx-auto">
          {/* Top Section with Image and Text */}
          <div className="space-y-10 bg-white p-8 rounded-xl">
            <h2 className="text-5xl text-sky-900 text-center mb-12 font-sans">
            Varicose Veins
            </h2>

            <div className="flex  justify-center">
              <img
              src="/vc/varicose/varicose2.jpg"
              alt="Descriptive Alt Text"
              className="w-4/5 h-full object-cover rounded-xl mb-10"
              />
            </div>

            
            
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
             <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             What Are Varicose Veins ?
             </h3>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             Varicose veins are enlarged, swollen, and twisted veins that often appear blue or dark purple. They are usually raised above the skin’s surface and can look like rope-like cords.
             </p>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             They happen when veins become overfilled with blood because the valves that keep blood flowing correctly toward the heart weaken or fail. This causes blood to pool in the veins.
             </p>
             </div>
             <div className="flex flex-col bg-white rounded-xl md:flex-row gap-4">
             <img
               src="/vc/varicose/varicose1.jpg"
               alt="Procedure Illustration"
               className="w-full md:w-1/2 h-64 md:h-96 object-fill rounded-xl"
             />
             <img
               src="/vc/varicose/image.png"
               alt="Procedure Illustration"
               className="w-full md:w-1/2 h-64 md:h-96 object-fill rounded-xl"
             />
             </div>
            </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/vc/spider/image.png"
              alt="Procedure Illustration"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              📍 Where Do Varicose Veins Appear?
              </h3>
              <ul className="text-base text-sky-700 mb-2 mt-2 leading-loose list-disc list-inside">
              <li>Back of the calves and thighs</li>
              <li>Inside of the legs</li>
              <li>Feet and ankles Rarely</li>
              <li>Pelvic area</li>
              <li>Rectum (hemorrhoids are a type of varicose vein)</li>
              </ul>
            </div>
            </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             🧬 Why Do They Form?
             </h3>
             <p className="text-base text-sky-700 mt-2 leading-loose text-start ">
             Varicose veins develop mainly due to increased pressure in the veins. Key factors include:
              </p>
              <ul className="text-base text-sky-700  mb-2 leading-loose list-disc list-inside">
                <li>Aging (veins lose elasticity and valves weaken)</li>
                <li>Pregnancy (hormonal changes and increased blood volume)</li>
                <li>Prolonged standing or sitting (especially jobs like teachers, nurses, retail workers)</li>
                <li>Obesity (extra pressure on veins)</li>
                <li>Family history</li>
                <li>Hormonal changes (birth control pills, menopause)</li>
              </ul>
           </div>
           <img
             src="/vc/varicose/varicose3.jpg"
             alt="Procedure Illustration"
             className="w-full h-64 md:h-96 object-fill rounded-xl"
           />
           </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/vc/varicose/varicose4.jpg"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              🩺 Are They a Sign of a Bigger Problem?
              </h3>
              <p className="text-base text-sky-700 mt-2 leading-loose text-start ">Sometimes, yes. While many varicose veins are simply cosmetic, serious cases can lead to:</p>
              <ul className="text-base text-sky-700 leading-loose mb-2 mt-2 list-disc list-inside">
                <li>Pain or aching legs</li>
                <li>Swelling</li>
                <li>Skin discoloration (brownish patches)</li>
                <li>Itching or burning over the vein</li>
                <li>Ulcers (especially around the ankles)</li>
                <li>Blood clots (deep vein thrombosis, DVT)</li>
                </ul>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             🛠️ Varicose Vein Treatment Options
             </h3>
             <ul className="text-base text-sky-700 mt-2 leading-loose text-start mb-2 list-disc list-inside">
                <li>Sclerotherapy</li>
                <li>Radiofrequency Ablation</li>
                <li>Venaseal</li>
                <li>Varithena</li>
                <li>Vein Stripping and Ligation (Surgical)</li>
                <li>Ambulatory Phlebectomy</li>
                </ul>
           </div>
           <img
             src="/treatments/rfa/rfa_p1.jpg"
             alt="Procedure Illustration"
             className="w-full h-64 md:h-96 object-cover rounded-xl"
           />
           </div>

          
          

          <FaqSection faqs={exampleFaqs}/>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Varicose;