"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    text: "“Dr Banerjee and his staff are the friendliest, most accommodating and supportive, and highly skilled team that I have ever gone to correct AVF access problems. They make surgery as easy and comfortable as possible. I give them three thumbs up and recommend them highly. They are a true oasis in a desert.”",
    author: "Doug",
  },
  {
    text: "“One of the best doctors I have been to. The minor surgical procedure he performed was textbook perfect. Moreover, he took a lot of time to explain every step of the operation, as well as the follow-up instructions. His staff is excellent, organized, and very friendly. I really can't say enough positive things about my experience with Dr. Banerjee.”",
    author: "Timanik",
  },
  {
    text: "“I have had several procedures preformed by Dr Banergees .Each time he and his staff were totally professional. They are very friendly and spend quality time explaining what they will be doing. They make sure you are comfortable and very caring. Dr Banergees is so personable and makes you feel at ease. I highly recommend RMA vascular CTR. In my opinion they are the best!!!'”",
    author: "Sandra Pinon",
  },
  {
    text: "“He is one of my favorite doctors, Truly compassionate, professional, extremely knowledgeable, and tallented, His team is superb, I thank God for them everyday,”",
    author: "Lucille Martinez",
  },
  {
    text: "“Dr. Banerjee and his staff are amazing!!! I recently had a vein ablation procedure at RMA. Doctor Banerjee and his staff took the time to explain every part of the procedure to me. They were thorough, professional, and very caring. Marla, Idaly, Taylor, Figo, David, Chris and Jeff are an amazing team!”",
    author: "Dennis Banning",
  },
  {
    text: "“My first visited with Dr. Satyaki Banerjee was a great experience. The best doctor I have been to. The minor procedure he did was perfect. He explained every step before the operation and also spend time on follow-up instructions. Most of all, he is very knowledgeable with his job. Thank you Dr. Banerjee for all you do!!”",
    author: "Jenny Lee",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next"); // State to track the direction of the transition

  const handlePrev = () => {
    setDirection("prev");  // Set the direction to "prev" for downward transition
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("next");  // Set the direction to "next" for upward transition
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-8 lg:px-16 text-center relative overflow-hidden">
      <h2 className="text-gray-700 text-sm font-semibold uppercase mb-4">
        What Our Patients Say
      </h2>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
        Testimonials
      </h1>
      <div className="relative h-48 flex items-center justify-center">
        {/* Animation Wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: direction === "next" ? 50 : -50 }} // Set initial position based on direction
            animate={{ opacity: 1, y: 0 }} // Final position: center
            exit={{ opacity: 0, y: direction === "next" ? -50 : 50 }} // Set exit position based on direction
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="absolute"
          >
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {testimonials[current].text}
            </p>
            <p className="text-gray-600 mt-4 italic">- {testimonials[current].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handleNext}
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
        >
          ↑
        </button>
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
        >
          ↓
        </button>
      </div>
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
      <Link href="../about">About Us</Link>
      </button>
    </div>
  );
}