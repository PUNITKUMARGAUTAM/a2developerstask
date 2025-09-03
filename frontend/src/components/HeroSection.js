import React from "react";
import "./section.css";

function HeroSection({ onOpenForm }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/Pic/girl.jpg" alt="Educational Management" />
        </div>

        <div className="hero-text">
          <h1>
            Usher in a new era of <br />
            <span>Educational Management</span>
          </h1>
          <p>
            Eliminate errors and inefficiencies with an advanced ERP system
            designed for education. Streamline operations, automate tasks, and
            enhance productivity effortlessly. Say goodbye to manual hassles and
            embrace a smarter, faster way to manage your institution!
          </p>
          <button className="demo-btn" onClick={onOpenForm}>
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
