import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";
import Image from "next/image";


const VenousUlcers = () => {


  const exampleFaqs = [
    {
      question: "What is Venous Ulcer?",
      answer: "A venous ulcer is a chronic wound that usually develops on the lower leg or ankle due to poor blood circulation from damaged veins. They are often slow to heal and may recur if not properly managed.",
    },
    {
      question: "What causes venous ulcers?",
      answer: "Venous ulcers are typically caused by chronic venous insufficiency, where the veins in your legs don’t effectively return blood to the heart. This leads to pressure buildup in the veins, which can damage skin and tissue, resulting in ulcers.",
    },
    {
      question: "What are the symptoms of a venous ulcer?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Pain, itching, or swelling in the affected area</li>
          <li>Skin discoloration or darkening (usually around the ankle)</li>
          <li>Open wound with uneven edges and possible discharge</li>
          <li>Hardened or leathery skin near the ulcer</li>
        </ul>
      ),
    },
    {
      question: "How are venous ulcers diagnosed?",
      answer: "Diagnosis typically involves a physical examination, a detailed medical history, and sometimes an ultrasound to assess blood flow in the leg veins.",
    },
    {
      question: "How long does it take for a venous ulcer to heal?",
      answer: "Healing time varies but may take several weeks to months depending on severity and adherence to treatment. Early intervention improves outcomes.",
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
            Venous Ulcers
            </h2>

            <div className="flex justify-center">
              <Image
              src="/vc/venous_ulcers/image4.png"
              alt="Venous Ulcers"
              className="w-4/5 h-full object-cover rounded-xl mb-10 border-4 border-sky-900"
              />
            </div>

            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             💡 What Exactly Are Venous Ulcers?
             </h3>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             Venous ulcers (also called venous stasis ulcers) are open sores that usually occur on the lower legs or ankles.
            </p>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             They are caused by poor blood circulation in the veins — when blood pools and pressure builds up, it damages the skin and underlying tissue, eventually leading to an open wound.</p>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             They are the most common type of leg ulcer.
              </p>
            </div>
           <Image
             src="/vc/venous_ulcers/venous1.jpg"
             alt="Illustration"
             className="w-full h-64 md:h-96 object-fill rounded-xl"
           />
           </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/vc/venous_ulcers/image7.png"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              📍 Where Do Venous Ulcers Appear?
              </h3>
              <ul className="text-base text-sky-700 mb-2 mt-2 leading-loose list-disc list-inside">
              <li>Above the ankle (usually on the inner side)</li>
              <li>Lower calf</li>
              <li>Rarely on the foot or higher up on the leg unless the problem is very severe</li>
              </ul>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <Image
              src="/vc/venous_ulcers/image.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             🧬 Why Do They Form?
             </h3>
             <p className="text-base text-sky-700 mt-2 leading-loose text-start ">
             Venous ulcers happen when veins fail to push blood properly back toward the heart — a condition called chronic venous insufficiency (CVI).
             <br/>Key causes and risk factors:
                           </p>
              <ul className="text-base text-sky-700  mb-2 leading-loose list-disc list-inside">
                <li>Varicose veins (major risk factor)</li>
                <li>Deep vein thrombosis (DVT) – past blood clots damaging valves</li>
                <li>Obesity – increases leg vein pressure</li>
                <li>Aging – vein walls weaken over time</li>
                <li>Prolonged standing or sitting</li>
                <li>History of leg injuries (trauma to veins)</li>
              </ul>
           </div>
           <Image
             src="/vc/spider/image3.png"
             alt="Procedure Illustration"
             className="w-full h-64 md:h-96 object-fill rounded-xl"
           />
           </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/vc/venous_ulcers/image8.png"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              🩺 Symptoms of Venous Ulcers
              </h3>
              <ul className="text-base text-sky-700 leading-loose mb-2 mt-2 list-disc list-inside">
                <li>Open wound with uneven edges</li>
                <li>Shallow sore that may ooze or drain fluid</li>
                <li>Skin discoloration (dark brown, purple, or red patches)</li>
                <li>Itching or burning around the sore</li>
                <li>Thick, hardened skin around the ulcer (lipodermatosclerosis)</li>
                <li>Swelling in the lower leg</li>
                <li>Pain (can be mild or severe, often worse when standing)</li>
                <li>Foul odor if the ulcer gets infected</li>
                </ul>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <Image
              src="/vc/venous_ulcers/image1.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
           <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
            ⚡ Important to understand:
             </h3>
             <p className="text-base text-sky-700 mt-2 leading-loose text-start ">Venous ulcers form because of venous hypertension — meaning blood is pooling in the leg veins.</p>
             <p className="text-base text-sky-700 mt-2 leading-loose text-start ">Closing the faulty veins with RFA, Varithena, VenaSeal, or Sclerotherapy:</p>
             <ul className="text-base text-sky-700 mt-2 leading-loose text-start mb-2 list-disc list-inside">
                <li>Reduces the pressure</li>
                <li>Improves blood circulation</li>
                <li>Gives the ulcer a much better chance to heal</li>
                <li>Prevents new ulcers from forming in the futur</li>
                </ul>
           </div>
           <Image
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

export default VenousUlcers;