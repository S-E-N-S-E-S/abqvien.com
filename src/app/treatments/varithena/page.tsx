import React from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import TestimonialSection from "@/app/components/testimonial";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";


const Varithena = () => {

  const exampleFaqs = [
    {
      question: "What is Varithena?",
      answer: "Varithena® is an FDA-approved, minimally invasive, non-surgical foam treatment used to treat varicose veins and chronic venous insufficiency. It involves injecting a specially formulated microfoam into the affected vein to collapse it and redirect blood flow to healthier veins.",
    },
    {
      question: "How does Varithena work?",
      answer: "The microfoam is injected into the problematic vein using a small needle. It fills the vein, causing it to collapse and seal shut. Over time, the closed vein is absorbed by the body, improving both symptoms and appearance.",
    },
    {
      question: "Is Varithena painful?",
      answer: "Most patients experience little to no pain. Only a small amount of local anesthetic is needed at the injection site, and no incisions or heat are used.",
    },
    
    {
      question: "What is the recovery like after Varithena?",
      answer: (
        <ul className="list-disc list-inside">
          
          <li>Most patients resume light activities the same day</li>
          <li>You’ll need to wear compression stockings for 1–2 weeks</li>
          <li>Avoid heavy exercise and prolonged standing for a few days</li>
        </ul>
      ),
    },
    
    {
      question: "Is Varithena permanent?",
      answer: "The treated vein is permanently closed, but new varicose veins can form if underlying venous disease continues. Ongoing vein health management is important.",
    },
  
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-500 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="px-4 py-8 space-y-12 max-w-full mx-auto">
        <h2 className="text-5xl text-sky-900 text-center font-sans ">
        <strong>Varithena : </strong>A New Way to Treat Varicose Veins
            </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/treatments/varithena/vari1.jpeg"
              alt="Procedure Illustration"
              className="w-full h-96 object-fill rounded-xl "
            />
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-96">
              <h3 className="font-semibold text-sky-900 text text-center text-2xl  mr-2">
              Get Back to Living with Varithena
                </h3>
              <p className="text-base text-sky-700 mt-4 font-sans leading-loose text-center">
                When it comes to treating varicose veins and
                getting back to the activities you love, there’s
                a new, nearly painless way. Varithena is a gentle
                foam treatment delivered in as few as 1–2 needle
                sticks. Patients reporting pain at the injection or
                application site in clinical trials was 4.0%.1 For most
                people, Varithena improves both physical symptoms
                related to varicose veins and their appearance.
                </p>

                {/* <h3 className="font-semibold text-sky-900 text text-2xl  mr-2">
                A Quick, Nearly Painless Procedure
                </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose ">
                Varicose vein treatment involves injecting a foam
                that causes veins to close. Varithena is minimally
                invasive, and patients reporting pain at the injection
                or application site in clinical trials was 4.0%.1 There’s
                no need for incisions or stitches, and treatment is
                usually less than an hour. Most people only need
                a single treatment to see results.
                </p> */}
            </div>
          </div>

          {/* Cards Section */}
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-md ">
            <h2 className="text-3xl font-semibold font-sans text-sky-900 text-center mb-12 mt-6">
              Learn More About Varithena Procedure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
              <div className="p-4 border bg-gradient-to-r h-[300px] from-sky-700 to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                A Quick, Nearly Painless Procedure
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                  Varicose vein treatment involves injecting a foam
                  that causes veins to close. Varithena is minimally
                  invasive, and patients reporting pain at the injection
                  or application site in clinical trials was 4.0%.1 There’s
                  no need for incisions or stitches, and treatment is
                  usually less than an hour. Most people only need
                  a single treatment to see results.    
                   </p>
              
              </div>

              <div className="p-4 border bg-gradient-to-r from-sky-700 to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                What Treatment Is Like
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                Unlike some other foams, Varithena is FDA-approved.
                During a treatment session, a physician injects the
                foam inside diseased veins to close them down,
                allowing blood to flow through other, healthier veins.  
                   </p>
              
              </div>

              <div className="p-4 border bg-gradient-to-r from-sky-700 to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-xl text-white text-center my-4">
                  What are the side effects?
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                The most common side effects are leg pain or
                discomfort, injection site bruising or pain and
                potentially serious blood clots in the leg veins.
                These are not all of the possible side effects
                of Varithena.
                   </p>
              
              </div>

              
              
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border bg-gradient-to-r from-sky-700 to-sky-800 rounded-[66px] shadow-sm bg-">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                Will my insurance cover treatment?
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                Varithena is covered by most Medicare and insurance
                plans. Coverage may depend on the severity of your
                varicose veins and symptoms. Your physician’s office
                may be able to help you understand your coverage.  
                   </p>
              
              </div>

              <div className="p-4 border bg-gradient-to-r from-sky-700 to-sky-800 rounded-[66px] shadow-base ">
                <h3 className="font-semibold text-white text-xl text-center my-4">
                Why Treatment is Different
                </h3>
                <p className="text-base text-white italic text-center mb-2">
                There are no incisions, sedation or general
                anesthesia. Your physician may recommend
                Varithena, because it:
                   </p>
              
              </div>

            

              
              
            </div> */}
          </div>
          
          {/* Bottom Paragraphs */}
          {/* <div className="space-y-4">
            <h2 className="text-3xl text-sky-900 font-semibold font-sans text-center">
              ClosureFast Radiofrequency Ablation Catheter
            </h2>
            <p className="text-sky-700 text-base font-sans leading-loose text-center max-w-full px-4">
              Provides thermal energy to the desired treatment site and relays temperature and other feedback to the RF generator. The ClosureFast™ catheter is a specialized medical device used during radiofrequency ablation (RFA) to treat varicose veins and chronic venous insufficiency. It’s one of the most widely used and trusted tools for vein treatment.
            </p>
          </div> */}


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/treatments/varithena/variT.png"
              alt="Procedure Illustration"
              className="w-full h-{250px} object-fill rounded-xl"
            />

            <img        
              src="/treatments/varithena/variT2.png"
              alt="Procedure Illustration"
              className="w-full h-{250px} object-fill rounded-xl"
            />
            </div>

          <FaqSection faqs={exampleFaqs}/>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Varithena;