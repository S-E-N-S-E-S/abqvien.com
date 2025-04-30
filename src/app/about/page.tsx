"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

const About: React.FC = () => {
  // Animation Variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Header />
      <div className=" mx-auto  ">
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section
          className="parallax bg-fixed bg-cover bg-center h-screen mb-10 relative"
          style={{ backgroundImage: "url('about.jpg')" }}
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
                About Us
              </h1>
              
            </div>
          </div>
        </section>
        </motion.h1>
        

        {/* Introduction Section */}
        <section className="bg-white shadow-md p-8 rounded-lg mb-12">
          <motion.p
            className="text-gray-700 text-lg leading-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
          >
            Welcome to our state-of-the-art dialysis care center. We are
            dedicated to providing comprehensive vascular access services and
            timely interventions to ensure patients have the best outcomes on
            dialysis. Our skilled team specializes in diagnosing and managing
            dialysis access complications with expertise and care.
          </motion.p>
        </section>

        {/* Procedures Performed Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Text Content */}
          <motion.div
            className="bg-white shadow-md p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Procedures We Perform
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>Chronic Venous Insufficiency</li>
              <li>Vericose Veins , Spider Veins (Sclerotherapy)</li>
              <li>Declot or Thrombectomy</li>
              <li>Angiogram/Fistulogram</li>
              <li>Angioplasty</li>
              <li>Stent Placement</li>
              <li>Tunneled Dialysis Catheter Insertion</li>
              <li>Temporary Catheter Insertion</li>
              <li>Vessel Mapping</li>
              <li>Endo AVF Creation</li>
              <li>Aneurysm Repair</li>
              <li>Peritoneal Dialysis Catheter Placement</li>
            </ul>
          </motion.div>

          {/* Image Space */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.8 }}
          >
            <img
              src="sclero.jpeg"
              alt="Dialysis care procedures"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Reasons for Referral Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Space */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-md pl-56 h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
          >
            <img
              src="cvi.jpg"
              alt="Reasons for referral"
              className="w-2/3 h-full object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="bg-white shadow-md p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Reasons for Referral
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>Difficulty cannulation on dialysis</li>
              <li>Arm swelling or bruising</li>
              <li>Low access flow measurement</li>
              <li>Prolonged bleeding at needle sites</li>
              <li>Dialysis catheter infection</li>
              <li>Clotted access with no flow</li>
              <li>Initiation of dialysis with PD or tunneled catheter</li>
              <li>Infection requiring catheter exchange or removal</li>
            </ul>
          </motion.div>
        </section>

        

        {/* Call to Action Section */}
        <section className="mt-16 mb-16 text-center">
          <motion.h3
            className="text-3xl font-bold text-blue-900 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.8 }}
          >
            Your Health, Our Priority
          </motion.h3>
          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.8 }}
          >
            We are here to ensure your dialysis journey is smooth and
            comfortable. Contact us today to learn more about our services or
            to schedule an appointment.
          </motion.p>
          <motion.button
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
          <Link href="../contact-us">Contact Us</Link>
            
          </motion.button>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
//       <div className="bg-sky-700 text-white justify-between py-1  ">
//         <div className="flex justify-between space-x-4">
//         <div className="flex items-center space-x-2 pl-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="white"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="white"
//           className="w-6 h-6"
//         >
//           <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 5.25C3 4.00736 4.00736 3 5.25 3h13.5C19.9926 3 21 4.00736 21 5.25v13.5c0 1.2426-1.0074 2.25-2.25 2.25H5.25C4.00736 21 3 19.9926 3 18.75V5.25zM16.5 7.5h-9m9 3h-9m6 3h-6"
//           />
//         </svg>
//         <h1 className="text-lg font-sans text-center">
//           (505) 448-8346
//         </h1>
//         </div>

//         <div className="flex items-center space-x-2 pl-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="white"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="white"
//           className="w-6 h-6"
//         >
//           <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3 5.25C3 4.00736 4.00736 3 5.25 3h13.5C19.9926 3 21 4.00736 21 5.25v13.5c0 1.2426-1.0074 2.25-2.25 2.25H5.25C4.00736 21 3 19.9926 3 18.75V5.25zM16.5 7.5h-9m9 3h-9m6 3h-6"
//           />
//         </svg>
//         <h1 className="text-lg font-bld text-center">
//         Our
//         </h1>
//         <h1 className="text-lg font-extrabold text-center">
//         Osuna Road NE, NM
//         </h1>
//         <h1 className="text-lg font-bld text-center">
//         Office
//         </h1>
//         </div>

//         <div className="flex items-center space-x-2 pr-4">
//         <h1 className="text-lg font-extrabold text-center">
//         Fax:
//         </h1>
//         <h1 className="text-lg font-bld text-center">
//         (505) 531-8914
//         </h1>
//         </div>
          
//         </div>
//       </div>

//       <div className="w-full px-4 py-0 flex justify-between items-center max-w-screen-2xl ">
    
//             <Link href="/">
//               <img src="/image.png" alt="Advanced Vascular" className="h-32 w-auto" />
//             </Link>

//           <div className="flex " >
//                 <nav className="flex space-x-8 items-center " >
//                 {/* ✅ Dropdown Menu */}
//                   <div className="relative group">
//                     <div className="text-black hover:text-sky-900 transition duration-300 text-base cursor-pointer">
//                       Home
//                     </div>

//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-base">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>


//                   <div className="relative group">
//                     {/* Dropdown Button */}
//                     <button className="text-black hover:text-sky-900 transition duration-300 text-base">
//                     Venous Conditions 
//                     </button>
                    
//                     {/* Dropdown Content */}
//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-sm">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     {/* Dropdown Button */}
//                     <button className="text-black hover:text-sky-900 transition duration-300 text-base">
//                     Reasons to be Checked 
//                     </button>
                    
//                     {/* Dropdown Content */}
//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-sm">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     {/* Dropdown Button */}
//                     <button className="text-black hover:text-sky-900 transition duration-300 text-base">
//                     Services And Treatments
//                     </button>
                    
//                     {/* Dropdown Content */}
//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-sm">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     {/* Dropdown Button */}
//                     <button className="text-black hover:text-sky-900 transition duration-300 text-base">
//                     Contact Us 
//                     </button>
                    
//                     {/* Dropdown Content */}
//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-sm">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     {/* Dropdown Button */}
//                     <button className="text-black hover:text-sky-900 transition duration-300">
//                     Refferal Form 
//                     </button>
                    
//                     {/* Dropdown Content */}
//                     <div className="absolute hidden group-hover:block bg-white shadow-lg  w-48 z-30">
//                       <ul className="text-gray-700 text-sm">
//                         <li>
//                           <Link href="/service-1" className="block px-4 py-2 hover:bg-blue-100">Service 1</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-2" className="block px-4 py-2 hover:bg-blue-100">Service 2</Link>
//                         </li>
//                         <li>
//                           <Link href="/service-3" className="block px-4 py-2 hover:bg-blue-100">Service 3</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>

//                 </nav>

//               {/* Consult Now Button */}
//               <Link href="../contact-us" 
//                 className="bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-800 transition duration-300 ml-4">
//                   Appointments
//                 </Link>

//           </div>
//           {/* Navigation Section with Dropdown */}
          

//         </div>
//       </header>