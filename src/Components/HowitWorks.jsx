// src/sections/HowItWorks.jsx
import React from "react";
import { FaCheck, FaCheckCircle, FaCoins, FaLink, FaPlug, FaServer, FaSprayCan } from "react-icons/fa"; // Kamu bisa ganti sesuai kebutuhan

const cards = [
  {
    title: "Connect your wallet",
    subtitle: "Connect",
    desc: "Secure and seamless login with Plug or Stoic wallet — no account, no passwords.",
    rotate: "rotate-[-10deg]",
    icon: <FaLink size={14} />,
  },
  {
    title: "Scan & verify your identity",
    subtitle: "Scan & Verify",
    desc: "Using AI facial recognition or document scanning, your identity is verified in real time.",
    rotate: "rotate-[-2deg]",
    icon: <FaCheck size={14} />,
  },
  {
    title: "Receive your SBT",
    subtitle: "No Data Stored",
    desc: "Once verified, a non-transferable identity token (SBT) is sent to your wallet.",
    rotate: "rotate-[4deg]",
    icon: <FaCoins size={14} />,
  },
  {
    title: "Zero data stored",
    subtitle: "Secure",
    desc: "Your identity is verified, but never stored on servers. You stay in control.",
    rotate: "rotate-[10deg]",
    icon: <FaServer size={14} />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 bg-white pb-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        How it Works
      </h2>

      {/* Cards */}
      <div className="relative z-10 flex flex-wrap justify-center items-end  animate-slide-up">
        {cards.map((card, index) => {
          // Penyesuaian z-index dan posisi
          const isMiddle = index === 1 || index === 2;
          const z = isMiddle ? "z-20 hover:-translate-y-7" : "z-10 hover:-translate-y-2 ";
          const translateY = isMiddle ? "translate-y-0" : "translate-y-11"; // Lebih halus dari sebelumnya

          return (
            <div
              key={index}
              className={`how-card bg-blue-500 text-white   rounded-4xl shadow-[-2px_11px_21px_-4px_rgba(0,_0,_0,_0.35)] p-5 w-[250px] sm:w-[280px] md:w-[300px] h-[370px] flex flex-col transition-all duration-500 ${card.rotate} ${z} ${translateY}`}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs text-gray-200 font-medium">
                  {card.subtitle}
                </p >
                <div className="bg-white text-blue-500 rounded-lg p-2">{card.icon}</div>
                
              </div>
              <h3 className="text-3xl text-left font-semibold mt-6 mb-6">
                {card.title}
              </h3>
              <p className="text-sm text-black text-left leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* White Box Cover */}
      <div className="absolute bottom-0 left-0 w-full h-35 bg-white shadow-[0px_-33px_28px_-37px_rgba(0,_0,_0,_0.35)] z-20 "></div>
    </section>
  );
};

export default HowItWorks;
