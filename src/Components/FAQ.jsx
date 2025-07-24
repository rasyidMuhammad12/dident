import React, { useState } from "react";

const faqs = [
  {
    question: "What is dIdent and how does it work?",
    answer:
      "dIdent is a decentralized digital identity verification system powered by AI and Web3. It verifies your identity directly on-device, with no data stored on servers.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. dIdent works without sign-up. Just verify your identity and you're good to go.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. All processes run locally on your device, and the result is hashed — nothing gets sent or stored.",
  },
  {
    question: "Can I use Web3 wallets like Plug?",
    answer:
      "Yes. dIdent supports Plug, Stoic, and Internet Identity wallets seamlessly.",
  },
  {
    question: "What is a Soulbound Token?",
    answer:
      "After a successful verification, you'll receive a non-transferable Soulbound Token that proves your verified identity.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white" id="FAQ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-black text-left mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border-b pb-4 cursor-pointer transition-all duration-300 hover:translate-x-2 animate-fade-up"
                onClick={() => toggle(i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-black">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-black  ">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
