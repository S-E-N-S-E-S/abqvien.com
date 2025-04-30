import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";
import Image from "next/image";


const Spider = () => {

  const exampleFaqs = [
    {
      question: "What are spider veins?",
      answer: "Spider veins are small, thin veins that appear close to the surface of the skin, often looking like red, blue, or purple web-like patterns. They commonly appear on the legs, face, and ankles.",
    },
    {
      question: "Are spider veins harmful?",
      answer: "Spider veins are usually harmless and painless, but they may cause mild discomfort, itching, or burning. Some people seek treatment for cosmetic reasons, while others want relief from symptoms.",
    },
    {
      question: "What’s the difference between spider veins and varicose veins?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Spider veins are smaller, flatter, and often cosmetic.</li>
          <li>Varicose veins are larger, bulging, and can cause significant discomfort or lead to complications.</li>
          <li>Spider veins are usually red or blue, while varicose veins are often purple or dark blue.</li>
          <li>Spider veins are typically not associated with serious health issues, while varicose veins can lead to complications like blood clots or ulcers.</li>
        </ul>
      ),
    },
    {
      question: "How are spider veins diagnosed?",
      answer: "They are usually diagnosed through a visual examination. If deeper vein problems are suspected, a duplex ultrasound may be recommended.",
    },
    {
      question: " Is spider vein treatment painful?",
      answer: "Treatments like sclerotherapy or laser therapy cause minimal discomfort. Most patients describe a brief stinging or burning sensation during the procedure.",
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
            Spider Veins
            </h2>

            <div className="flex  justify-center">
              <Image
              src="/vc/spider/spider1.webp"
              alt="Descriptive Alt Text"
              className="w-4/5 h-full object-cover rounded-xl mb-10"
              />
            </div>

            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             What Are Spider Veins ?
             </h3>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
               Spider veins are small, damaged veins that can appear on the surface of the legs or face. They may look like red, blue, or purple lines and are often shaped like a spider web or tree branches—hence the name.
             </p>
             <p className="text-base text-sky-700  text-center leading-loose mb-2 mt-2">
             Spider veins (medical term: telangiectasias) are small, dilated blood vessels near the surface of the skin. Unlike varicose veins (which are larger, twisted, and bulging), spider veins are thin and flat, but still very visible.             </p>
           </div>
           <Image
             src="/vc/spider/spider2.jpg"
             alt="Procedure Illustration"
             className="w-full h-64 md:h-96 object-contain rounded-xl"
           />
           </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/vc/spider/image.png"
              alt="Procedure Illustration"
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              What Causes Spider Veins?
              </h3>
              <ul className="text-base text-sky-700 mb-2 mt-2 leading-loose list-disc list-inside">
              <li>Genetics – family history is a strong risk factor.</li>
              <li>Age – veins can weaken over time.</li>
              <li>Hormonal changes – especially during pregnancy, puberty, or menopause.</li>
              <li>Prolonged standing or sitting – can increase pressure in the veins.</li>
              <li>Sun exposure – particularly on the face.</li>
              <li>Obesity – adds pressure on veins.</li>
              <li>Injury or trauma to the skin.</li>
              </ul>
            </div>
            </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             Are Spider Veins Dangerous?
             </h3>
             <p className="text-base text-sky-700 mt-2 leading-loose text-start mb-2">
                Typically, spider veins are not harmful and are mostly a cosmetic concern, but in some cases, they may cause:
              </p>
              <ul className="text-base text-sky-700  mb-2 leading-loose list-disc list-inside">
                <li>Aching or burning</li>
                <li>Mild swelling</li>
                <li>Itching around the vein</li>
              </ul>
              <p className="text-base text-sky-700 leading-loose text-start mb-2">
                If symptoms become uncomfortable or worsen, it’s a good idea to consult a healthcare provider.
              </p>
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
              src="/vc/spider/image4.png"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white flex flex-col justify-start h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2">
              How Are Spider Veins Treated?
              </h3>
              <ul className="text-base text-sky-700 leading-loose mb-2 mt-2 list-disc list-inside">
                <li>Sclerotherapy – a solution is injected into the veins, causing them to collapse and fade.</li>
                <li>Laser treatment – especially effective for small veins and facial veins.</li>
                <li>Radiofrequency ablation – uses heat to close off veins.</li>
                <li>Compression stockings – help improve circulation and prevent new spider veins.</li>
                </ul>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
             <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 mt-4">
             Prevention Tips
             </h3>
             <ul className="text-base text-sky-700 mt-2 leading-loose text-start mb-2 list-disc list-inside">
                <li>Exercise regularly</li>
                <li>Maintain a healthy weight</li>
                <li>Avoid standing or sitting for long periods</li>
                <li>Elevate your legs</li>
                <li>Wear sunscreen</li>
                <li>Use compression garments if recommended</li>
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

export default Spider;