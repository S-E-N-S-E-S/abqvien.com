'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string | JSX.Element; // Accept string or JSX.Element (e.g., <ul>)
};

type FaqSectionProps = {
  faqs: FaqItem[]; // Accept FAQ items as a prop
};

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-full mx-auto pr-4 py-12">
      <h2 className="text-2xl text-sky-900 font-semibold font-sans">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between w-full py-4 text-left items-center"
          >
            <h3 className="text-lg font-sans font text-sky-800">{faq.question}</h3>
            {openIndex === index ? <ChevronUp className="text-blue-600" /> : <ChevronDown />}
          </button>

          {openIndex === index && (
            <div className="bg-sky-100 text-sky-700 p-4 rounded-md flex flex-col md:flex-row justify-between items-start gap-6">
                {typeof faq.answer === 'string' ? (
                <p className="max-w-fit text-sky-700 text-base italic font-sans leading-loose">{faq.answer}</p>
                ) : (
                <div className="italic">{faq.answer}</div>
                )}
                {index === 0 && (
                <div className="bg-gradient-to-r from-sky-700 to-sky-800 text-white p-4 rounded-lg w-400 md:w-2/3 flex flex-col justify-center items-center text-center">
                  <p className="font-semibold mb-2">Return quickly to an active lifestyle!</p>
                  <button className="bg-white text-sky-700 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition m-auto">
                    Book an Appointment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FaqSection;