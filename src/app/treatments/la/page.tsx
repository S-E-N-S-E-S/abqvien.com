import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";


const La = () => {

  const exampleFaqs = [
    {
      question: "What is Laser Ablation for Varicose Veins?",
      answer: "Endovenous Laser Ablation (EVLA or EVLT) is a minimally invasive procedure that uses laser energy to treat varicose veins and chronic venous insufficiency (CVI). It works by heating the inside of the diseased vein, causing it to close and be absorbed by the body.",
    },
    {
      question: "How does EVLA work?",
      answer: "A laser fiber is inserted into the affected vein under ultrasound guidance. Once in place, the laser delivers targeted heat, damaging the vein wall and sealing it shut. Blood is naturally rerouted through healthier veins.",
    },
    {
      question: "Is the procedure painful?",
      answer: "The procedure is done with local anesthesia, so you’ll feel little to no pain. You might feel slight pressure or a warming sensation during treatment.",
    },
    
    {
      question: "What conditions does Laser Ablation treat?",
      answer: (
        <ul className="list-disc list-inside">
          
          <li>Varicose veins</li>
          <li>Chronic venous insufficiency (vein reflux)</li>
          <li>Symptoms like leg pain, swelling, heaviness, and skin changes</li>
        </ul>
      ),
    },
    
    {
      question: "Will the treated vein come back?",
      answer: "No, the treated vein is permanently closed, but new varicose veins can form over time. Lifestyle changes and periodic checkups can help prevent recurrence.",
    },
  
  ];
    return (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-500 font-sans">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="px-4 py-8 space-y-12 max-w-full mx-auto">
              {/* Top Section with Image and Text */}
              <div className="space-y-10">
                <h2 className="text-5xl text-sky-900 text-center font-sans">
                  Laser Ablation Therapy for Varicose Veins
                </h2>
    
                <img
                  src="/treatments/la/la_home.png"
                  alt="Descriptive Alt Text"
                  className="w-full h-full object-cover rounded-xl mb-10"
                />
                <p className="text-sky-700 text-xl font-sans leading-loose text-center max-w-full px-4">
                Laser ablation is a minimally invasive procedure used to treat varicose veins, which are enlarged, twisted veins commonly found in the legs. This technique involves the use of laser energy delivered through a thin fiber inserted into the affected vein. The laser heats and seals the vein wall, causing it to collapse and eventually be absorbed by the body. Blood is naturally rerouted to healthier veins, improving circulation and reducing symptoms such as pain, swelling, and skin discoloration. 
                </p>
              </div>
    
              {/* Cards Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold font-sans text-sky-900 text-center my-12">
                  Learn More About Laser Ablation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-gradient-to-r from-sky-700 to-sky-800">
                    <h3 className="font-semibold text-white text-center my-4">
                    How does the treatment work?
                    </h3>
                    <p className="text-sm text-white mb-2 text-center leading-relaxed">
                    Laser ablation is a minimally invasive treatment for varicose veins, which are enlarged veins caused by poor circulation. After numbing the skin with lidocaine, a small wire and catheter are inserted into the affected vein. The catheter delivers laser energy to the vein wall, causing it to heat, collapse, and seal shut. The treated vein is gradually absorbed by the body, while healthy veins take over blood flow.
                    </p>
                    
                  </div>
                  <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-gradient-to-r from-sky-700 to-sky-800">
                    <h3 className="font-semibold text-white text-center my-4">
                    What should I expect on the day of treatment?
                    </h3>
                    <p className="text-sm text-white mb-2 text-center leading-relaxed">
                    On the day of your laser ablation treatment, you’ll arrive at the clinic or outpatient center, usually wearing loose, comfortable clothing. The procedure is typically performed under local anesthesia, so you’ll remain awake but relaxed. After cleaning the area, the doctor will numb the skin with lidocaine. A small incision will be made to insert a thin catheter into the targeted vein, often guided by ultrasound.
                    </p>
                    
                  </div>
                  <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-gradient-to-r from-sky-700 to-sky-800">
                    <h3 className="font-semibold text-white text-center my-4">
                    What should I do after treatment?
                    </h3>
                    <p className="text-sm text-white mb-2 text-center leading-relaxed">
                    You should walk 30 minutes twice daily after treatment.  This will alleviate discomfort and avoid the pooling of blood in the legs.   It is normal to have aching in the treated veins.  This response is well to walking, ice packs, and anti-inflammatory medications such as ibuprofen (Advil®, Motrin®) and naproxen (Aleve®).
                    </p>
                    
                  </div>
                  
                </div>
              </div>
    
              {/* Two Column Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="/treatments/rfa/rfa_p1.jpg"
                  alt="Procedure Illustration"
                  className="w-full h-96 object-cover rounded-xl "
                />
                <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-96">
                  <h3 className="font-semibold text-sky-900 text text-2xl text-center mr-2">
                    Procedure:
                  </h3>
                  <p className="text-base text-sky-700 mt-2 font-sans leading-loose text-center">
                    Your physician will perform the ClosureFast procedure. Using ultrasound, your physician will position a catheter in the diseased vein through a small opening in the skin. The small catheter delivers heat to the vein wall, causing it to shrink and seal the vein. Once the diseased vein is closed, blood will reroute itself to other healthy veins. Following the procedure, your physician will apply a simple bandage over the insertion site, and may give you compression stockings to aid the healing process. Your physician may encourage you to walk, and to refrain from extended standing and strenuous activities for a period of time. The average patient typically resumes normal activities in a few days.
                  </p>
                </div>
              </div>
    
              {/* Bottom Paragraphs */}
              <div className="space-y-4">
                <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
                  ClosureFast Radiofrequency Ablation Catheter
                </h2>
                <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
                  Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <img
                  src="/treatments/rfa/rfa_catheter.png"
                  alt="Procedure Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
    
              <div className="flex flex-row space-x-8">
                {/* Left Section */}
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold text-sky-900 mb-2">ClosureRFS Radiofrequency Ablation Stylet</h2>
                    <p className="text-sky-700 text-base font-sans leading-loose max-w-full ">
                    Delivers bipolar RF energy to desired treatment site and relays temperature and other feedback to the RF generator.
                    </p>
                </div>
    
                {/* Right Section */}
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold text-sky-900 mb-2">ClosureRFG Radiofrequency Generator</h2>
                    <p className="text-sky-700 text-base font-sans leading-loose max-w-full ">
                        Supplies and controls the RF energy delivered to the catheter.                
                    </p>
                </div>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <img
                  src="/treatments/rfa/rfa_catheter_2.png"
                  alt="Procedure Illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
    
              <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white h-96 ">
                  <h3 className="font-semibold text-sky-900 text text-2xl text-center mr-2 mb-8">
                  ClosureFast™ Endovenous Radiofrequency (RFA) Ablation Catheter
                  </h3>
                  <p className="text-base text-sky-700 mt-2 font-sans leading-loose ">
                  <strong>Indications for Use:</strong> The ClosureFast™ endovenous radiofrequency ablation (RFA) catheter is intended for endovascular coagulation of blood vessels
                        in patients with superficial vein reflux.</p>
                  <p className="text-base text-sky-700 mt-2 font-sans leading-loose "><strong>Contraindications:</strong> The ClosureFast catheter is contraindicated for use in patients with thrombus in the target vein segment.</p>
                  <p className="text-base text-sky-700 mt-2 font-sans leading-loose "><strong>Potential Adverse Effects of the Device on Health:</strong> The potential complications include, but are not limited to, the following: adjacent nerve injury,
                        hematoma, pulmonary embolism, thrombosis, infection, phlebitis, skin burn or discoloration, and vessel perforation.</p>
                  <p className="text-base text-sky-700 mt-2 font-sans leading-loose "><strong>Important:</strong> Please reference the Instructions For Use (IFU) for a complete listing of indications, contraindications, warnings and precautions, adverse
                        effects, and suggested procedure.              
                    </p>
                </div>
    
              <FaqSection faqs={exampleFaqs}/>
    
            </div>
          </main>
          <Footer />
        </div>
      );
};

export default La;