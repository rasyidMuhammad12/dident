// src/sections/BenefitsGrid.jsx
import React from "react";
import {
  FaUserShield,
  FaRobot,
  FaShieldAlt,
  FaWallet,
  FaMedal,
  FaBan,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserShield className="text-xl text-white" />,
    title: "Privacy-First",
    description: "No central server. All data is processed and hashed on-device.",
  },
  {
    icon: <FaRobot className="text-xl text-white" />,
    title: "AI-Powered",
    description: "Uses OCR and AI to recognize and normalize ID data instantly.",
  },
  {
    icon: <FaShieldAlt className="text-xl text-white" />,
    title: "Tamper-Proof",
    description: "Verification is secured on-chain, preventing duplication or forgery.",
  },
  {
    icon: <FaWallet className="text-xl text-white" />,
    title: "Web3-Ready",
    description: "Seamless integration with Plug, Stoic, and Internet Identity wallets.",
  },
  {
    icon: <FaMedal className="text-xl text-white" />,
    title: "Soulbound Tokens",
    description: "Earn a unique, non-transferable badge after successful verification.",
  },
  {
    icon: <FaBan className="text-xl text-white" />,
    title: "No Sign-Up Needed",
    description: "Frictionless access — just verify and go.",
  },
];

const BenefitsGrid = () => {
  return (
    <section className=" pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Benefits of dIdent
        </h2>
        <p className="text-gray-500 mt-2">
          A secure, private and decentralized verification system
        </p>
      </div>

      <div className="grid md:grid-cols-3  gap-y-6   max-w-5xl mx-auto animate-fade-up">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4  p-6   transition duration-300 hover:-translate-y-2"
          >
            <div className="bg-black p-2 rounded-lg">{item.icon}</div>
            <div>
              <h3 className="text-xl mb-3 font-semibold text-black mb-1">
                {`${String(index + 1).padStart(2, "0")}. ${item.title}`}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsGrid;
