 import React from "react";
import "./Timeline.css";

const steps = [
  {
    id: 1,
    title: "ANALYSIS",
    subtitle: "Our Team will have a detailed understanding about your business and goals.",
    img: "/Pic/e.jpg",
  },
  {
    id: 2,
    title: "Ideas",
    subtitle: "Based on the discussion our designers will provide creative ideas.",
    img: "/Pic/ee.jpg",
  },
  {
    id: 3,
    title: "DEVELOPMENT",
    subtitle: "We start working on the complete website development.",
    img: "/Pic/eee.jpg",
  },
  {
    id: 4,
    title: "DELIGHT",
    subtitle: "We deliver the site and make any requested updates.",
    img: "/Pic/d.jpg",
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <h3 className="timeline-heading">WE WORK PRECISELY ON EVERY STEP</h3>

        <div className="timeline">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div className={`timeline-item ${isLeft ? "left" : "right"}`} key={step.id}>
                <div className="step-img-wrap">
                  <img src={step.img} alt={step.title} className="step-img" />
                </div>
                <div className="content">
                  <div className="step-number">{step.id}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-sub">{step.subtitle}</p>
                </div>
              </div>
            );
          })}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}