import React from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import TestimonialSection from "@/app/components/testimonial";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";

const Rfa = () => {

  const exampleFaqs = [
    {
      question: "What is Radiofrequency Ablation (RFA)?",
      answer: "Radiofrequency Ablation (RFA) is a minimally invasive procedure used to treat varicose veins caused by chronic venous insufficiency. It uses radiofrequency energy (heat) to close off malfunctioning veins, allowing healthy veins to take over blood flow.",
    },
    {
      question: "How long does the procedure take?",
      answer: "The procedure typically takes less than an hour and is performed in an outpatient setting.",
    },
    {
      question: "How does RFA work?",
      answer: "A thin catheter is inserted into the affected vein under ultrasound guidance. The catheter delivers radiofrequency energy to heat the vein wall, causing it to collapse, seal shut, and eventually be absorbed by the body.",
    },
    
    {
      question: "What conditions can RFA treat?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Varicose veins</li>
          <li>Chronic Venous Insufficiency (CVI)</li>
          <li>Symptoms like leg pain, swelling, heaviness, or skin changes due to poor venous circulation</li>
        </ul>
      ),
    },
    
    {
      question: "Is RFA painful?",
      answer: "The procedure is done under local anesthesia, and most patients experience minimal discomfort. You may feel slight pressure or warmth during the treatment.",
    },
  
    {
      question: "What is the recovery like?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Most patients return to normal activities within 24–48 hours</li>
          <li>You’ll be asked to wear compression stockings for 1–2 weeks</li>
          <li>Walking is encouraged immediately after the procedure</li>
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
          <div className="space-y-10">
            <h2 className="text-5xl text-sky-900 text-center font-sans">
              ClosureFast™ Radiofrequency Ablation System
            </h2>

            <img
              src="/treatments/rfa/rfa_c1.png"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-xl mb-10"
            />
            <p className="text-sky-700 text-xl font-sans leading-loose text-center max-w-full px-4">
              Radiofrequency ablation is a simple and gentle procedure where a thin, soft tube (called a catheter) is placed into the problem vein through a tiny opening in the skin. This tube sends out radiofrequency energy, which warms up the vein just enough to safely close it. Once the vein is closed, the tube is removed, and your body begins to heal right away. Over time, the closed vein is naturally absorbed, and your blood flow is smoothly redirected through nearby healthy veins.
            </p>
          </div>

          {/* Cards Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold font-sans text-sky-900 text-center my-12">
              Learn More About Radiofrequency Ablation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                  How It Works
                </h3>
                <p className="text-sm text-sky-700 mb-2">
                  Radiofrequency ablation uses heat to close problem veins, redirecting blood flow to healthier veins. This minimally invasive procedure ensures quick recovery and effective results.
                </p>
                <ul className="list-disc list-inside text-sm text-sky-700">
                  <li>Relief of symptoms after two days, with a noticeable improvement in one to two weeks.</li>
                  <li>Tiny Entry Point: A small opening is made in the skin, usually near the affected vein.</li>
                  <li>Inserting the Catheter: A very thin, flexible tube (called a catheter) is gently guided into the vein.</li>
                  <li>Targeting the Problem Vein: The catheter is carefully positioned along the damaged or varicose vein.</li>
                  <li>Applying Gentle Heat: The catheter sends out radiofrequency energy, which heats the vein walls.</li>
                  <li>Sealing the Vein: The heat causes the vein to collapse and seal shut.</li>
                  <li>Catheter Removal: The catheter is then removed, leaving no stitches needed.</li>
                  <li>Natural Healing: The closed vein is gradually absorbed by your body over time.</li>
                  <li>Blood Flow is Rerouted: Your blood naturally finds its way through nearby healthy veins, improving circulation.</li>
                </ul>
              </div>
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                  Benefits
                </h3>
                <p className="text-sm text-sky-700 mb-2">
                  Experience reduced pain, improved circulation, and a quick return to daily activities. RFA is a safe and effective treatment for varicose veins with minimal downtime.
                </p>
                <ul className="list-disc list-inside text-sm text-sky-700">
                  <li><strong>✅ Minimally Invasive:</strong> RFA uses a tiny catheter and a small skin puncture—no large incisions or stitches.</li>
                  <li><strong>🕒 Quick Recovery Time:</strong> Most patients return to normal activities within a day or two.</li>
                  <li><strong>💡 Effective Results:</strong> RFA is highly successful in closing problematic veins and relieving symptoms like pain, swelling, and heaviness.</li>
                  <li><strong>🧼 Less Pain & Bruising:</strong> Compared to traditional vein surgery, RFA typically causes less discomfort and fewer side effects.</li>
                  <li><strong>⏱️ Fast Procedure:</strong> The treatment usually takes less than an hour and is done in-office or outpatient settings.</li>
                  <li><strong>🚫 No General Anesthesia Needed:</strong> Local anesthesia is used, reducing risks and allowing a quicker recovery.</li>
                  <li><strong>🦵 Improved Leg Appearance & Comfort:</strong> Helps reduce visible varicose veins and improves overall leg health and comfort.</li>
                  <li><strong>🩺 Long-Term Relief:</strong> Many patients experience long-lasting symptom relief and improved quality of life.</li>
                </ul>
              </div>
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                  What to Expect
                </h3>
                <p className="text-sm text-sky-700">
                  The procedure is performed in a comfortable outpatient setting. Most patients report little to no discomfort and can resume normal activities within a day.
                </p>
                <ul className="list-disc list-inside text-sm text-sky-700">
                  <li><strong>✅ Before the Procedure</strong></li>
                  <ul className="list-disc list-inside pl-4">
                    <li><strong>Initial Consultation:</strong> Your provider will assess your vein health and may perform an ultrasound to map out the problem veins.</li>
                    <li><strong>Pre-Procedure Instructions:</strong> You may be asked to avoid certain medications, wear loose-fitting clothing, and drink plenty of water.</li>
                    <li><strong>No General Anesthesia:</strong> Only local anesthesia is used—so you’ll be awake, relaxed, and comfortable during the procedure.</li>
                  </ul>
                  <li><strong>🩺 During the Procedure</strong></li>
                  <ul className="list-disc list-inside pl-4">
                    <li><strong>Quick & Comfortable:</strong> The procedure typically takes 30–45 minutes.</li>
                    <li><strong>Minimal Discomfort:</strong> You may feel slight pressure or warmth, but the local anesthesia keeps you comfortable.</li>
                    <li><strong>Tiny Incision:</strong> A thin catheter is gently inserted into the vein through a small puncture in the skin—no stitches required.</li>
                  </ul>
                  <li><strong>💙 After the Procedure</strong></li>
                  <ul className="list-disc list-inside pl-4">
                    <li><strong>Immediate Walking Encouraged:</strong> You'll be asked to walk right after—it helps with circulation and healing.</li>
                    <li><strong>Compression Stockings:</strong> You may be advised to wear them for a few days to aid healing and reduce swelling.</li>
                    <li><strong>Minimal Downtime:</strong> Most patients return to work and normal activities the next day.</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/treatments/rfa/rfa_p1.jpg"
              alt="Procedure Illustration"
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
              <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4">
              Procedure:
              </h3>
              <p className="text-sm md:text-base text-sky-700 mt-2 font-sans leading-loose text-center">
              Your physician will perform the ClosureFast procedure. Using ultrasound, your physician will position a catheter in the diseased vein through a small opening in the skin. The small catheter delivers heat to the vein wall, causing it to shrink and seal the vein. Once the diseased vein is closed, blood will reroute itself to other healthy veins. Following the procedure, your physician will apply a simple bandage over the insertion site, and may give you compression stockings to aid the healing process. Your physician may encourage you to walk, and to refrain from extended standing and strenuous activities for a period of time. The average patient typically resumes normal activities in a few days.
              </p>
            </div>
            </div>

          {/* Bottom Paragraphs */}

          {/* <div className="space-y-4">
            <h2 className="text-2xl text-sky-900 font-bold font-sans text-center">
              ClosureFast Radiofrequency Ablation Catheter
            </h2>
            <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <img
              src="/treatments/rfa/rfa_catheter.png"
              alt="Procedure Illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div> */}

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
          </div> */}

            <div className="p-4 md:p-8 border-sky-900 rounded-xl shadow-sm bg-white h-auto md:h-96">
              <h3 className="font-semibold text-sky-900 text-xl md:text-2xl text-center mb-4 md:mb-8">
              ClosureFast™ Endovenous Radiofrequency (RFA) Ablation Catheter
              </h3>
              <p className="text-sm md:text-base text-sky-700 mt-2 font-sans leading-loose">
              <strong>Indications for Use:</strong> The ClosureFast™ endovenous radiofrequency ablation (RFA) catheter is intended for endovascular coagulation of blood vessels
                in patients with superficial vein reflux.</p>
              <p className="text-sm md:text-base text-sky-700 mt-2 font-sans leading-loose"><strong>Contraindications:</strong> The ClosureFast catheter is contraindicated for use in patients with thrombus in the target vein segment.</p>
              <p className="text-sm md:text-base text-sky-700 mt-2 font-sans leading-loose"><strong>Potential Adverse Effects of the Device on Health:</strong> The potential complications include, but are not limited to, the following: adjacent nerve injury,
                hematoma, pulmonary embolism, thrombosis, infection, phlebitis, skin burn or discoloration, and vessel perforation.</p>
              <p className="text-sm md:text-base text-sky-700 mt-2 font-sans leading-loose"><strong>Important:</strong> Please reference the Instructions For Use (IFU) for a complete listing of indications, contraindications, warnings and precautions, adverse
                effects, and suggested procedure.              
              </p>
            </div>

          <FaqSection faqs={exampleFaqs} />

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rfa;