import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaRobot, FaInfoCircle, FaCommentDots } from "react-icons/fa";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <FaPhoneAlt size={18} />,
      link: "tel:+918114468410",
      bg: "bg-blue-700",
    },
    {
      icon: <FaWhatsapp size={18} />,
      link: "https://wa.me/918114468410",
      bg: "bg-green-500",
    },
    {
      icon: <FaEnvelope size={18} />,
      link: "mailto:shubhaanganhd@gmail.com",
      bg: "bg-emerald-600",
    },
    {
      icon: <FaInfoCircle size={18} />,
      link: "/brochure.pdf",
      bg: "bg-yellow-400",
      download: true,
    }
  ];

  const radius = 90; 
  const arcStart = -10;
  const arcStep =35;

  return (
    <div className="fixed bottom-6 right-6 z-50" style={{overflow: 'visible'}}>
      {/* More space in parent so bubbles bahar dekhe */}
      <div className="relative" style={{ width: radius + 60, height: radius + 60, overflow: "visible" }}>
        {/* FAN OUT BUTTONS */}
        {buttons.map((btn, i) => {
          const angle = arcStart + i * arcStep;
          const radians = angle * (Math.PI / 180);
          const tx = open ? radius * Math.cos(radians) : 0;
          const ty = open ? radius * Math.sin(radians) : 0;
          return (
            <a
              key={i}
              href={btn.link}
              download={btn.download || false}
              target={btn.download ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`
                absolute w-12 h-12
                ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
              `}
              style={{
                right: 0,
                bottom: 0,
                zIndex: 30,
                transform: `translate(${-tx}px, ${-ty}px) scale(${open ? 1 : 0.2})`,
                transition: "all 0.35s cubic-bezier(.4,2,.3,1)",
                transitionDelay: open ? `${i * 60}ms` : `${(buttons.length - i) * 32}ms`
              }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 ${btn.bg}`}>
                {btn.icon}
              </div>
            </a>
          );
        })}
        {/* Main FAB */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 bg-emerald-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-800 shadow-xl absolute right-0 bottom-0 z-40"
        >
          <FaRobot size={22} />
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
