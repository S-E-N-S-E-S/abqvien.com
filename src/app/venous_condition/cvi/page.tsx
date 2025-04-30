import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";


const Cvi = () => {


  const exampleFaqs = [
    {
      question: "What is Chronic Venous Insufficiency (CVI)?",
      answer: "CVI is a long-term condition where the veins in the legs do not allow blood to flow back to the heart efficiently. This leads to blood pooling in the legs, causing swelling, discomfort, and skin changes.",
    },
    {
      question: " What causes CVI?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Damaged or weakened vein valves</li>
          <li>Deep vein thrombosis (DVT)</li>
          <li>Varicose veins</li>
          <li>Obesity</li>
          <li>Pregnancy</li>
          <li>Long periods of standing or sitting</li>
        </ul>
      ),
    },
    {
      question: "Can CVI be cured?",
      answer: "While CVI is a chronic condition, it can be effectively managed and symptoms significantly reduced with the right treatment. Early intervention helps prevent complications like ulcers.",
    },
    {
      question: "How is CVI diagnosed?",
      answer: (
        <ul className="list-disc list-inside">
          <li>A detailed physical exam</li>
          <li>Medical history review</li>
          <li>Duplex ultrasound to check blood flow and valve function in leg veins</li>
        </ul>
      ),
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
            Chronic Venous
            Insufficiency (CVI)
            </h2>

            <div className="flex  justify-center">
              <img
              src="/vc/cvi/cvi1.png"
              alt="Descriptive Alt Text"
              className="w-4/5 h-full object-cover rounded-xl mb-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pb-12">
              <div className="p-4 border bg-gradient-to-r h-[250px] from-sky-700 to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                Understanding vein disease 
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                Chronic venous insufficiency (CVI) and
                varicose veins are more common than
                you may think, affecting more than 30
                million people in the United States. 
                   </p>
              
              </div>

              <div className="p-4 border bg-gradient-to-r from-sky-700 h-[250px] to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                What is venous disease?
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                Vein disease — also called
                venous disease or chronic
                venous insufficiency (CVI) —
                is a medical condition.
                It is recognized by Medicare, Medicaid, and private
                insurance carriers as a medical condition.</p>
              
              </div>

              <div className="p-4 border bg-gradient-to-r from-sky-700 h-[250px] to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-xl text-white text-center my-4">
                A clinical challenge
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                The vast majority of
                patients with CVI
                remain undiagnosed
                and untreated.
                It is estimated that
                people live with CVI for
                up to 35 years before
                seeking treatment.
                   </p>
              
              </div>

              
              
            </div>
            
          </div>


          {/* Two Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/vc/cvi/cvi2.png"
              alt="Procedure Illustration"
              className="w-full h-96 object-cover rounded-xl "
            />
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-96">
              <h3 className="font-semibold text-sky-900 text text-2xl  mr-2">
               How did I get it?
              </h3>

              <h3 className="font-semibold text-sky-900 text text-xl  mr-2">
              Possible genetic risk factors:
              </h3>
              <ul className="text-base text-sky-700 mt-2 font-sans leading-regular">
                <li className="list-disc list-inside">Gender: women are more likely to
                develop the disease</li>
                <li className="list-disc list-inside">PregnaFamily historyncy</li>
              </ul>

              <h3 className="font-semibold text-sky-900 text text-xl mt-4 mr-2">
              Possible lifestyle risk factors
              </h3>
              <ul className="text-base text-sky-700 mt-2 font-sans">
                <li className="list-disc list-inside"> Lack of exercise</li>
                <li className="list-disc list-inside">Leg injury or trauma</li>
                <li className="list-disc list-inside">Prolonged sitting or standing</li>
                <li className="list-disc list-inside">Obesity or excess weight</li>
                <li className="list-disc list-inside">Current or previous pregnancies</li>
                <li className="list-disc list-inside">Smoking</li>
                <li className="list-disc list-inside">Blood clot (deep vein thrombosis)</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
            Prominent disease state comparison            </h2>
            {/* <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/vc/cvi/cvi3.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
              Venous pathophysiology          </h2>
            {/* <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/vc/cvi/cvi4.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>



          <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
            It’s more than just what you can see      </h2>
            {/* <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/vc/cvi/cvi5.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>


          <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
            Advanced-stage disease</h2>
            {/* <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/vc/cvi/cvi6.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>


          <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
            Advanced-stage disease</h2>
            {/* <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/vc/cvi/cvi7.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>


          {/* Two Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-96">
              <h3 className="font-semibold text-sky-900 text text-2xl text-center mt-4 mr-2">
              How to learn if you have vein disease
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-relaxed text-center">
              An ultrasound scan is the only definitive way
              to diagnose vein disease.
              A technician uses this test to get an image of
              the inside of your leg veins. A doctor will
              review the test results to determine if the
              valves inside the veins are working properly.
              Although insurance coverage varies by individual plan and the severity of disease,
              MOST insurance carriers, including Medicare, will cover necessary clinical tests
              (like an ultrasound test) that are done to help your doctor diagnose or rule out a
              suspected illness or condition.1
              (Consult your insurance carrier for specific coverage rules.)              </p>
            </div>

            <img
              src="/vc/cvi/cvi8.png"
              alt="Procedure Illustration"
              className="w-full h-96 object-fill rounded-xl "
            />
          </div>


          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white w-full h-full">
              <h3 className="font-semibold text-sky-900 text text-2xl mr-2 mt-2">
              What can I do about it?
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-relaxed">
              This disease is common — and treatable!<br />
              Your doctor will put together your treatment plan based on:<br />
              • Ultrasound test results<br />
              • A history and physical that focuses on your symptoms, family history, and lifestyle factors
              </p>

              <h3 className="font-semibold text-sky-900 text text-2xl  mr-2 mt-6">
              Treatment options
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-relaxed">
              Conservative therapies are required by insurance carriers. They can require up to three months of conservative therapies that show limited to no improvement to symptoms or quality of life before giving approval for additional/other treatment options.
              Examples: Exercise, leg elevation, compression stockings, over-the-counter anti-inflammatory medication, or Unna boot (for ulcers).
              </p>

              <h3 className="font-medium text-sky-900 italic text-xl mr-2 mt-6">
              * Conservative measures may only offer temporary
relief of symptoms.
              </h3>
              <h3 className="font-medium text-sky-900 italic text-xl mr-2 mt-2">
              * Compression stockings
                will not cure varicose veins,
                although they are effective
                in relieving symptoms
                caused by the condition
                and may reduce the risk
                of blood clots.
              </h3>
            </div>

            <img
              src="/vc/cvi/cvi9.png"
              alt="Procedure Illustration"
              className="w-full h-auto object-fill rounded-xl"
            />
            </div>





          {/* Cards Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold font-sans text-sky-900 text-center my-12">
            Treatment options for vein disease
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                Laser ablation
                </h3>
                <p className="text-sm text-sky-700 mb-2">
                Numbing agent is given by
                multiple needle sticks down
                the leg, and heat is used to
                close the vein.                </p>
                
              </div>
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                Mechanochemical ablation and
                foam sclerotherapy
                </h3>
                <p className="text-sm text-sky-700 mb-2">
                No multiple needle sticks to give
                numbing agent down the leg,
                and heat is not used. Mechanical
                device is used to deliver the
                closure therapy to the vein.                </p>
              
              </div>
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                ClosureFast™ radiofrequency
                ablation procedure
                </h3>
                <p className="text-sm text-sky-700">
                Numbing agent is given by
                multiple needle sticks down
                the leg, and heat is used to
                close the vein.                </p>
              
              </div>

              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                VenaSeal™ closure system
                </h3>
                <p className="text-sm text-sky-700">
                No heat, no multiple needle
                sticks to deliver numbing agent
                down the leg. Specially
                formulated medical adhesive is
                used to close the vein.               </p>
              
              </div>

            </div>
          </div>

          

          {/* Bottom Paragraphs */}
          

          {/* <div className="flex flex-row space-x-8">
            <div className="w-1/2">
                <h2 className="text-2xl font-semibold text-sky-900 mb-2">ClosureRFS Radiofrequency Ablation Stylet</h2>
                <p className="text-sky-700 text-base font-sans leading-loose max-w-full ">
                Delivers bipolar RF energy to desired treatment site and relays temperature and other feedback to the RF generator.
                </p>
            </div>

            <div className="w-1/2">
                <h2 className="text-2xl font-semibold text-sky-900 mb-2">ClosureRFG Radiofrequency Generator</h2>
                <p className="text-sky-700 text-base font-sans leading-loose max-w-full ">
                    Supplies and controls the RF energy delivered to the catheter.                
                </p>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
            </div> */}

          <FaqSection faqs={exampleFaqs}/>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cvi;