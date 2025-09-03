import React from "react";
import "./Values.css";

const values = [
  {
    icon: "🌱",
    title: "Better ourselves, every day",
    desc: "We are driven by a strong determination to surpass our own limits and continuously improve. Our focus is on enhancing our performance in every aspect, striving for excellence with each step.",
  },
  {
    icon: "👑",
    title: "Be an owner",
    desc: "We take full ownership of our actions and decisions, ensuring accountability in everything we do. By effectively delegating responsibilities, we foster teamwork and efficiency, creating a culture of trust and reliability.",
  },
  {
    icon: "❤️",
    title: "Respect everyone",
    desc: "We deeply value our people and customers, treating everyone with the utmost respect and appreciation. Our commitment to fostering strong relationships is at the heart of everything we do.",
  },
  {
    icon: "⭐",
    title: "Customer obsession",
    desc: "We prioritize our users' happiness, knowing that their satisfaction drives our success. When our users thrive, everything else naturally falls into place, creating a strong foundation for growth.",
  },
  {
    icon: "💬",
    title: "Do the right thing",
    desc: "We are committed to making ethical decisions and upholding integrity in all our actions. By staying true to our values, we build trust and foster a culture of honesty and responsibility.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "We believe in open, honest, and transparent communication in everything we do. By being straightforward, we foster trust, clarity, and strong relationships with everyone we interact with.",
  },
];

export default function Values() {
  return (
    <section className="values-section">
      <h2 className="values-heading">VALUE THAT DEFINES US</h2>
      <p className="values-subheading">
        At A2 Developers, we believe that people move the world forward and deserve the best
        technology in this pursuit.
      </p>

      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <div className="value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
}