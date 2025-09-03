 import React, { useState } from "react";
import "./ServicesSection.css";
import { FaSchool, FaSearch, FaGlobe, FaShoppingCart, FaWordpress, FaAndroid, FaBullhorn, FaLaptopCode, FaMobileAlt, FaServer, FaShareAlt } from "react-icons/fa";

const services = [
  { icon: <FaSchool />, title: "School ERP", desc: "Complete ERP solution for schools with features like attendance, fees, and exams." },
  { icon: <FaSearch />, title: "SEO (Search Engine Optimization)", desc: "Optimize your site to rank higher in search engine results." },
  { icon: <FaGlobe />, title: "Website Design & Development", desc: "Beautiful and responsive websites for all devices." },
  { icon: <FaShoppingCart />, title: "E-commerce Development", desc: "Build secure and scalable online stores." },
  { icon: <FaWordpress />, title: "WordPress Development", desc: "Custom themes and plugins for WordPress websites." },
  { icon: <FaAndroid />, title: "Android App Development", desc: "Feature-rich Android apps tailored to your business needs." },
  { icon: <FaBullhorn />, title: "Digital Marketing", desc: "Grow your brand online through strategic marketing." },
  { icon: <FaLaptopCode />, title: "Software & System Development", desc: "Custom software solutions for businesses." },
  { icon: <FaMobileAlt />, title: "Web & Mobile Application Development", desc: "Cross-platform apps with great performance." },
  { icon: <FaServer />, title: "Domain & Hosting", desc: "Fast, secure, and reliable hosting services." },
  { icon: <FaShareAlt />, title: "Social Media & Website Management", desc: "Manage and grow your online presence effectively." },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Services we offer</h2>
      <p className="services-subtitle">
        We offer a full spectrum of digital services tailored to help your business grow and operate more efficiently.
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-header" onClick={() => toggleAccordion(index)}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.title}</div>
              <div className={`arrow ${activeIndex === index ? "open" : ""}`}>⌄</div>
            </div>

            {activeIndex === index && (
              <div className="service-desc">
                {service.desc}
              </div>
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
}