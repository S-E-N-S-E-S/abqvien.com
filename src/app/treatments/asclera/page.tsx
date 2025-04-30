import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import FaqSection from "@/app/components/faq";
import Image from "next/image";

const Asclera = () => {

  const exampleFaqs = [
    {
      question: "What is Asclera?",
      answer: "Asclera® is an FDA-approved injectable medication used in sclerotherapy to treat Uncomplicated spider veins, Small varicose veins (reticular veins)",
    },
    {
      question: " How does Asclera treatment work?",
      answer: "A small needle is used to inject Asclera directly into the vein. The solution causes the vein walls to stick together and close. Eventually, the body absorbs the treated vein, improving both appearance and symptoms.",
    },
    {
      question: "Is Asclera permanent?",
      answer: "Treated veins are permanently closed, but new veins can appear over time. Maintenance treatments may be needed.",
    },
    
    {
      question: "What is recovery like after Asclera?",
      answer: (
        <ul className="list-disc list-inside">
          
          <li>You can resume normal activities the same day, though avoid intense exercise for 2–3 days.</li>
          <li>Compression stockings should be worn for 2–3 days post-treatment.</li>
          <li>Minor bruising, swelling, or redness is common but temporary.</li>
        </ul>
      ),
    },
    
    {
      question: "Is the treatment painful?",
      answer: "Most patients report minimal discomfort, often described as a mild burning or tingling at the injection site. A topical anesthetic is usually not required.",
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
            Asclera® (Polidocanol) Injection
            </h2>

            <Image
              src="/treatments/asclera/image.png"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-xl mb-10"
            />
            <div className="flex flex-row space-x-8">
              {/* Left Box */}
              <div className="flex-1 p-8 border m-16 border-sky-700 rounded-xl shadow-sm bg-sky-700">
              <h3 className="text-white text-2xl text-center font-sans font-semibold mb-2">
                What is Asclera®?
              </h3>
              <p className="text-white text-xl font-sans text-center leading-relaxed italic">
                Asclera (Polidocanol) Injection is an FDA-approved prescription medication used for the treatment of uncomplicated spider and uncomplicated reticular veins in the lower extremities.
              </p>
              </div>

              {/* Right Box */}
              <div className="flex-1 p-8 border border-sky-700 m-16 rounded-xl shadow-sm bg-sky-700">
              <h3 className="text-white text-2xl font-sans text-center font-semibold mb-2">
                What is sclerotherapy?
              </h3>
              <p className="text-white text-xl font-sans text-center leading-relaxed italic">
                Sclerotherapy is a minimally invasive procedure administered by your healthcare provider to treat uncomplicated spider veins and uncomplicated reticular veins. The treatment involves injecting a sclerosing agent, such as Asclera, into affected veins, causing them to seal shut and be reabsorbed into the body. The affected veins then fade from view over time.
              </p>
              </div>
            </div>
            
          </div>

          {/* Cards Section
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
          </div> */}
          

          <h2 className="text-4xl m-y-4  text-sky-900 text-center font-sans">
          YOUR FIRST STEP
            </h2>

          {/* Two Column Section */}

            <div className="flex flex-col bg-white rounded-lg shadow-md ">
                <div className="flex flex-col md:flex-row w-full h-auto rounded-lg bg-white p-8 space-y-6 md:space-y-0 md:space-x-6">
                <Image
                  src="/treatments/asclera/imag1.png"
                  alt="Procedure Illustration"
                  className="w-full md:w-1/2 h-96 object-cover rounded-xl"
                />
                <div className="flex flex-col justify-start p-8 border-sky-900 rounded-xl  bg-white">
                  <h3 className="font-semibold text-sky-900 text-2xl text-center mb-4">
                  What are Spider and Reticular veins?
                  </h3>
                  <p className="text-xl text-sky-700 font-sans leading-regular text-center">
                  Spider veins are very small, fine, red or blue
                  veins that are less than 1 mm in diameter.
                  They lie close to the surface of the skin and
                  may resemble a thin red line, tree branches, or
                  spiderweb patterns.
                  Small varicose veins, also known as reticular
                  veins, are small blood vessels that measure
                  between 1 to 3 mm in diameter. Reticular veins
                  can enlarge as a result of increased pressure in
                  the vein and are sometimes visible just below
                  the skin’s surface.
                  You may have only small varicose veins or both
                  small varicose and spider veins at the same time.
                   </p>
                </div>
                </div>

                

                <div className="flex flex-col md:flex-row w-full h-auto rounded-lg bg-white p-8 space-y-6 md:space-y-0 md:space-x-6">
                
                </div>

            </div>

            

            <div className="flex flex-col bg-white rounded-lg shadow-md ">
                <div className="flex flex-col md:flex-row w-auto h-auto rounded-lg bg-white p-8  space-y-6 md:space-y-0 md:space-x-6">
                
                <Image
                  src="/treatments/asclera/image2.png"
                  alt="Procedure Illustration"
                  className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="flex flex-col justify-start p-4 border-sky-900 rounded-xl  bg-white">
                  <h3 className="font-semibold text-sky-900 text-2xl text-center mb-4 mt-4">
                  Procedure:
                  </h3>
                  <p className="text-xl text-sky-700 font-sans leading-regular text-center">
                  Asclera is a minimally invasive injection treatment for spider and small varicose veins. It works by sealing the vein, which the body then naturally absorbs. The procedure is quick, requires little downtime, and delivers visible results. Patients wear compression stockings and can resume normal activities soon after.                  </p>
                </div>
                  </div>
                </div>

                <h1 className="text-4xl my-4 font text-sky-900 text-center font-sans">
            TAKE THE NEXT STEP
            </h1>

                <div className="flex flex-col bg-white rounded-lg shadow-md ">
                <div className="flex flex-col md:flex-row w-auto h-auto rounded-lg bg-white p-8  space-y-6 md:space-y-0 md:space-x-6">
                
                      <div className="flex flex-col justify-start p-8 border-sky-900 rounded-xl  bg-white">
                        <h3 className="font-semibold text-sky-900 text-2xl text-center mb-4">
                        Talk to your Healthcare Practitioner about Asclera
                        </h3>
                        <p className="text-xl text-sky-700 font-sans leading-regular text-center">
                          Asclera is an FDA-approved prescription medication
                          used in the treatment of cosmetic small vein therapy.
                          Asclera has been evaluated and verifi ed to be safe
                          and eﬀ ective, in contrast to compounded me
                        </p>
                        <h3 className="font-semibold text-sky-900 text-2xl text-center mb-4 mt-8">
                        What to expect during treatment
                                                </h3>
                        <ul className="text-xl text-sky-700 font-sans leading-regular text-center">
                          <li>• Treatment typically lasts between 15-45 minutes.</li>
                          <li>• The procedure is performed in your physician’s office.</li> 
                          <li>• The procedure is performed using a small needle.</li>
                          
                        </ul>
                      </div>
                      <Image
                        src="/treatments/asclera/image3.png"
                        alt="Procedure Illustration"
                        className="w-1/2 md:w-1/2 h-96 object-contain rounded-xl"
                      />
                  </div>
                </div>

          


          

          

          

            {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded-lg">
            <Image
              src="/treatments/asclera/image4.png"
              alt="Procedure Illustration"
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="p-4 border-sky-900 rounded-xl shadow-sm bg-white h-full flex flex-col justify-center">
              <h3 className="font-semibold text-sky-900 text-2xl text-center mr-2">
              INDICATION AND USAGE:
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose text-center">
              Asclera (polidocanol) is indicated to sclerose uncomplicated spider
              veins (varicose veins ≤1 mm in diameter) and uncomplicated reticular
              veins (varicose veins 1 to 3 mm in diameter) in the lower extremity.
              </p>

              <h3 className="font-semibold text-sky-900 text-2xl text-center mr-2">
              CONTRAINDICATIONS:
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose text-center">
              Asclera is contraindicated for patients with known allergy to
              polidocanol and patients with acute thromboembolic diseases.
              </p>

              <h3 className="font-semibold text-sky-900 text-2xl text-center mr-2">
              ADVERSE REACTIONS:
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose text-center">
              In clinical studies, the following adverse reactions were observed
              after using Asclera and were more common with Asclera than
              placebo: injection site hematoma, injection site irritation, injection site
              discoloration, injection site pain, injection site itching, injection site
              warmth, neovascularization, injection site clotting.
              </p>
            </div>
            </div>

          <FaqSection faqs={exampleFaqs}/>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Asclera;