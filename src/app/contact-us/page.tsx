import React from "react";
import Link from "next/link";
import TestimonialSection from "../components/testimonial";
import Footer from "../components/footer";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-green-50 text-gray-500 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/"><h1 className="text-3xl font-extrabold text-blue-900">
            Advanced Vascular
          </h1></Link>
          <nav>
            {/* <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              Request a Consultation
            </a> */}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
              4501 Osuna Road NE, Albuquerque, New Mexico, 87109
              </p>
              <p className="mb-4">Phone: (505) 448-8346</p>
              <p className="mb-4">Fax: (505) 531-8914</p>
              <p className="mb-4">Hours of Operation</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Monday - Friday: 8AM - 5PM</li>
                <li>Saturday - Sunday: Closed</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps?q=35.155611,-106.590278&hl=en&z=14&output=embed"
                width="600"
                height="450"
                loading="lazy"
                className="w-full h-64 rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Driving Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-900 mb-2">
              N on I25
              </h3>
              <p>
              Get off on the San Mateo exit. Head west on osuna turn right on the street that’s between subway and Motel 6, straight. Building on the left. 4501 Osuna
              </p>
            </div>
            
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white shadow-md p-6 rounded-lg">
              <summary className="font-semibold text-blue-900">
                What Makes Advanced Vascular Different?
              </summary>
              <p className="mt-4">
              • We offer state-of-the-art treatments for venous and aesthetic
                skin concerns, ensuring you always look and feel your best.
              </p>
              <p className="mt-2">
              • Experience advanced vein treatment and vascular therapy that is painless, non-invasive, and free from side effects delivering effective results while prioritizing your comfort and well-being
              </p>
            </details>
          </div>
        </section>
                
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">
            Request a Consultation
          </h2>
          <form 
          action="https://formspree.io/f/xeoqzgye" // Replace with your Formspree form ID
            method="POST"
          className="bg-white shadow-md p-6 rounded-lg">
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="number"
              >
                Phone
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="number"
                id="number"
                name="number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="message"
                name="message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </section> 


        <TestimonialSection/>        
      </main>

      <Footer/>
    </div>
  );
};

export default ContactPage;