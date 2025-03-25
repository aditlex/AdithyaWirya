"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you accept freelance or side projects?",
      answer: "Yes, I am open to freelance and side projects."
    },
    {
      question: "What technologies or frameworks do you use the most?",
      answer: "I primarily use Next.js and Tailwind CSS."
    },
    {
      question: "How long have you been learning web development?",
      answer: "I have been learning web development for 1 year."
    },
    {
      question: "What is your biggest or favorite project?",
      answer: "My favorite project is building my portfolio website."
    },
    {
      question: "How can people contact you for collaboration or inquiries?",
      answer: "You can contact me via social media or email."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <button
              className="w-full text-left text-xl font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
