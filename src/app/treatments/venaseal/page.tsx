import React from "react";
import Link from "next/link";
import Header from "@/app/components/header";
import TestimonialSection from "@/app/components/testimonial";
import Footer from "@/app/components/footer";
import FaqSection from "@/app/components/faq";


const Venaseal = () => {

  const exampleFaqs = [
    {
      question: "What is VenaSeal?",
      answer: "VenaSeal is a non-thermal, non-tumescent, minimally invasive procedure used to treat chronic venous insufficiency and varicose veins. It uses a medical adhesive to close abnormal veins, rerouting blood flow through healthy veins.",
    },
    {
      question: "How does VenaSeal work?",
      answer: "A small catheter is inserted into the diseased vein under ultrasound guidance. A special medical-grade adhesive is then delivered through the catheter to seal the vein shut. Over time, the vein is absorbed by the body.",
    },
    {
      question: "How long does the VenaSeal procedure take?",
      answer: "The entire procedure typically takes 20 to 40 minutes, depending on the number of veins being treated.",
    },
    
    {
      question: "What conditions does VenaSeal treat?",
      answer: (
        <ul className="list-disc list-inside">
          
          <li>Chronic Venous Insufficiency (CVI)</li>
          <li>Symptomatic varicose veins It is best for patients with vein reflux (backward flow of blood).</li>
        </ul>
      ),
    },
    
    {
      question: "Is VenaSeal painful?",
      answer: "Most patients report minimal to no pain during the procedure. Local anesthesia is used only at the catheter entry site.",
    },
  
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 text-gray-500 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="px-4 py-8 space-y-12 max-w-full mx-auto">
          <div>

            {/* Top Section with Image and Text */}
          <div className="space-y-10 bg-white p-8 w-full">
            <h2 className="text-5xl text-sky-900 text-center font-sans">
            VenaSeal™ Procedure Nonthermal Vein Closure
            </h2>

            <div className="flex flex-row space-x border-white border-opacity-5 bg-white rounded-xl shadow-sm w-full overflow-hidden">
              <div className="w-1/4 h-[200px] flex items-center justify-center">
                <img
                  src="/treatments/venaseal/venaseal2.jpg"
                  alt="Venaseal 1"
                  className="h-full object-fill "
                />
              </div>

              <div className="w-1/4 h-[200px] flex items-center justify-center">
                <img
                  src="/treatments/venaseal/venaseal3.jpg"
                  alt="Venaseal 2"
                  className="h-full object-fill "
                />
              </div>

              <div className="w-1/4 h-[200px] flex items-center justify-center">
                <img
                  src="/treatments/venaseal/venaseal1.jpg"
                  alt="Venaseal 3"
                  className="h-full object-fill "
                />
              </div>

              <div className="w-1/4 h-[200px] flex items-center justify-center">
                <img
                  src="/treatments/venaseal/venaseal4.jpg"
                  alt="Venaseal 4"
                  className="h-full object-fill "
                />
              </div>
            </div>

            <p className="text-sky-700 text-xl font-sans leading-loose text-center max-w-full px-4">
            The VenaSeal™ Closure System is an innovative, minimally invasive treatment for varicose veins. It uses a proprietary medical adhesive to seal the affected veins, eliminating the need for heat, sclerosants, or tumescent anesthesia. This approach significantly reduces discomfort during and after the procedure. Unlike thermal ablation techniques, VenaSeal also eliminates the risk of nerve injury, particularly when treating the small saphenous vein. The procedure is performed in-office, requires minimal recovery time, and has been clinically proven to be safe, effective, and well-tolerated by patients.               </p>
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl">
            
            <div className="p-4 border-sky-900 rounded-xl  h-96">
              <h3 className="font-semibold text-sky-900 text text-2xl  mr-2">
              Demonstrated Outcomes:
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans ">
              The VenaSeal closure system is a safe and effective
              treatment, providing significant improvement in
              quality of life. In a US. study, the VenaSeal system and thermal
              radiofrequency ablation treatments had similar
              clinical results at five years: 94.6% closure for the
              VenaSeal system® and 91.9% for thermal energy . 
              </p>
              
              <h3 className="font-semibold text-sky-900 text text-2xl  mr-2 mt-10">
              The VenaSeal System
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans ">
              It delivers a small amount of
              a specially formulated medical adhesive to close
              the diseased vein, rerouting blood to nearby
              healthy veins, which provides symptom relief.
              </p>
            </div>

            <div className="flex flex-row rounded-xl  h-96 overflow-hidden">
              <div className="flex flex-col justify-center items-center w-1/2 h-full">
              
                <h3 className="font-semibold text-sky-900 text text-xl  mr-2 mt-4">
                Before:
              </h3>
              
              <img
              src="/treatments/venaseal/venasealA.jpeg"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-xl p-4"
              />
              </div>
              <div className="flex flex-col justify-center items-center w-1/2 h-full">
              
                <h3 className="font-semibold text-sky-900 text text-xl  mr-2 mt-4">
                After:
              </h3>
              
              <img
              src="/treatments/venaseal/venasealA.jpg"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-xl p-4"
              />
              </div>
            </div>
            
           
          </div>


          </div>
          

          {/* Cards Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold font-sans text-sky-900 text-center my-12">
              Learn More About VenaSeal™ Procedure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-sky-900 text-center my-4">
                  A more comfortable experience
                </h3>
                <p className="text-sm text-sky-700 mb-2">
                  Radiofrequency ablation uses heat to close problem veins, redirecting blood flow to healthier veins. This minimally invasive procedure ensures quick recovery and effective results.
                </p>
                <ul className="list-disc list-inside text-sm text-sky-700">
                  <li> Simple, outpatient procedure</li>
                  <li>No tumescent anesthesia</li>
                  <li>Less pain and bruising than thermal ablation.</li>
                  <li>Faster recovery time than thermal ablation.</li>
                  <li>Compression stockings not needed after the procedure</li>
                  </ul>
              </div> */}

              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                
                <h3 className="font-semibold text-sky-900 text-2xl text-center my-4">
                  A more comfortable experience
                </h3>

                <ul className="list-disc list-inside text-base text-sky-700">
                  <li> Simple, outpatient procedure</li>
                  <li>No tumescent anesthesia</li>
                  <li>Less pain and bruising than thermal ablation.</li>
                  <li>Faster recovery time than thermal ablation.</li>
                  <li>Compression stockings not needed after the procedure</li>
                  </ul>
                
                <h3 className="font-semibold text-sky-900 text-2xl text-center my-4 mt-12">
                  May not be for you :
                </h3>
                <p className="text-base text-sky-700 mb-2">
                The VenaSeal procedure is contraindicated for
                individuals with any of the following conditions:
                  </p>
                <ul className="list-disc list-inside text-base text-sky-700">
                  <li> Thrombophlebitis migrans (i.e., inflammation of a vein
                    caused by a slow-moving blood clot)</li>
                  <li>Acute superficial thrombophlebitis
                  (i.e., inflammation of a vein caused by a blood clot)</li>
                  <li> Previous hypersensitivity reactions to the VenaSeal
                  adhesive or cyanoacrylates</li>
                  <li> Acute sepsis (i.e., whole-body inflammation caused by
                    an immune response to an infection)</li>
                </ul>
              </div>
              <div className="p-4 border border-sky-700 rounded-xl shadow-sm bg-white">
                
                <h3 className="font-semibold text-sky-900 text-2xl text-center my-4">
                  Potential risks
                </h3>

                <p className="text-base text-sky-700">
                  The VenaSeal procedure is minimally invasive and
                  catheter-based. As such, it may involve the following
                  risks. Your doctor can help you understand these risks.  
                </p>
                
                <ul className="list-disc list-inside text-base text-sky-700">
                    <li> Adverse reactions to a foreign body (including, but not limited to, nonspecific mild inflammation of the cutaneous and subcutaneous tissue)</li>
                    <li>Arteriovenous fistula (i.e., an abnormal connection
                      between an artery and a vein)</li>
                    <li>Bleeding from the access site</li>
                    <li>Deep vein thrombosis (i.e., blood clot in the deep vein
                      system)</li>
                    <li>Edema (i.e., swelling) in the treated leg</li>
                    <li>Embolization (i.e., blockage of a vein or artery),
                        including pulmonary embolism (i.e., blockage of an
                        artery in the lungs)</li>
                    <li> Hematoma (i.e., the collection of blood outside of
                      a vessel)</li>
                    <li>Hyperpigmentation (i.e., darkening of the skin)</li>                  
                    <li> Hypersensitivity or allergic reaction to cyanoacrylates,
                        such as urticaria, shortness of breath, and anaphylactic
                        shock</li>
                    <li> Infection at the access site</li>
                    <li>Pain</li>
                    <li>Paresthesia (i.e., a feeling of tingling, pricking,
                      numbness, or burning)</li>
                    <li> Phlebitis (i.e., inflammation of a vein)</li>
                    <li> Superficial thrombophlebitis (i.e., inflammation of
                      a vein caused by a blood clot)</li>
                    <li>Urticaria (i.e., hives), erythema (i.e., redness), or
                      ulceration may occur at the injection site</li>
                    <li>Vascular rupture and perforation</li>
                    <li>Visible scarring</li>
                
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl text-sky-900 font-semibold font-sans text-center">
              VenaSeal closure system kit
            </h2>

          <img
              src="/treatments/venaseal/venasealT.png"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-xl mb-10"
            />

          <div className="flex flex-row rounded-xl  h-96 overflow-hidden">
              <div className="flex flex-col justify-center items-center w-1/2 h-full">
              
                <h3 className="font-semibold text-sky-900 text text-xl  mr-2 mt-4">
                VenaSeal Procedure External Compression with Ultraound
              </h3>
              
              <img
              src="/treatments/venaseal/venasealU.jpg"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-xl p-4"
              />
              </div>
              <div className="flex flex-col justify-center items-center w-1/2 h-full">
              
                <h3 className="font-semibold text-sky-900 text text-xl  mr-2 mt-4">
                VenaSeal Procedure Catheter Removal
              </h3>
              
              <img
              src="/treatments/venaseal/venasealC.jpg"
              alt="Procedure Illustration"
              className="w-full h-full object-fill rounded-xl p-4"
              />
              </div>
            </div>

          {/* Bottom Paragraphs */}
          

          <div className="p-8 border-sky-900 rounded-xl shadow-sm bg-white h-full ">
              <h3 className="font-semibold text-sky-900 text text-2xl text-center mr-2 mb-8">
              Brief statement VenaSeal™ closure system
              </h3>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose ">
              <strong>Intended Use/Indications:</strong> The VenaSeal™ closure system (VenaSeal system) is
                indicated for use in the permanent closure of lower extremity superficial truncal
                veins, such as the great saphenous vein (GSV), through endovascular embolization
                with coaptation. The VenaSeal system is intended for use in adults with clinically
                symptomatic venous reflux as diagnosed by duplex ultrasound (DUS).</p>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose "><strong>Contraindications:</strong> Separate use of the individual components of the VenaSeal
                  closure system is contraindicated. These components must be used as a system.
                  The use of the VenaSeal system is contraindicated when any of the following
                  conditions exist: previous hypersensitivity reactions to the VenaSeal adhesive or
                  cyanoacrylates, acute superficial thrombophlebitis, thrombophlebitis migrans,
                  acute sepsis.</p>
              <p className="text-base text-sky-700 mt-2 font-sans leading-loose "><strong>Potential Adverse Effects of the Device on Health:</strong> The potential adverse effects
                  (e.g., complications) associated with the use of the VenaSeal system include,
                  but are not limited to, adverse reactions to a foreign body (including, but not
                  limited to, nonspecific mild inflammation of the cutaneous and subcutaneous
                  tissue), arteriovenous fistula, bleeding from the access site, deep vein thrombosis
                  (DVT), edema in the treated leg, embolization, including pulmonary embolism
                  (PE), hematoma, hyperpigmentation, hypersensitivity or allergic reactions
                  to cyanoacrylates, such as urticaria, shortness of breath, and anaphylactic
                  shock, infection at the access site, pain, paresthesia, phlebitis, superficial
                  thrombophlebitis, urticaria, erythema, or ulceration may occur at the injection site,
                  vascular rupture and perforation, visible scarring.</p>
              
            </div>


          <FaqSection faqs={exampleFaqs}/>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Venaseal;