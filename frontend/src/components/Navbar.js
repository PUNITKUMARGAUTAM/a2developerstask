import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ onOpenForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      {/* 🔹 Top Bar */}
      <div className="navbar-top">
        <button className="demo-btn" onClick={onOpenForm}>
          <div className="fading">Book A Demo ▶</div>
        </button>

        <div className="contact-info">
          <a href="tel:+918303837930">📞 +91 83038 37930</a>
          <a href="mailto:contactus@a2developers.org">
            📧 contactus@a2developers.org
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Navbar */}
      <div className="navbar-bottom">
        {/* Left side logo */}
        <div className="logo">
          <div className="logo-text">
            <span className="logo-main">A2</span>
            <span className="logo-sub">Developers</span>
          </div>
        </div>

        {/* Right side nav */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About Us</a>
          <a onClick={() => scrollToSection("products")}>Product</a>
          <a
            onClick={() => {
              onOpenForm();
              setMenuOpen(false);
            }}
          >
            Contact Us
          </a>
          <a onClick={() => scrollToSection("services")}>Services</a>
        </nav>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
