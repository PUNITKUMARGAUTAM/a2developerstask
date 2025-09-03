import React, { useState } from "react";
import "./Footer.css";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import EnquiryForm from "./EnquiryForm";  // import form

function Footer() {
  const [showForm, setShowForm] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2>A2 Developers</h2>
          <p>
            A2 Developers is the premier agency directory, awards platform, and
            media hub connecting brands with top agencies in software, app
            development, and design.
          </p>
          <p>© A2 Developers 2024 - 25, All Rights Reserved</p>
        </div>

        {/* WHO WE ARE */}
        <div className="footer-section">
          <h3>WHO WE ARE</h3>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>

        {/* Modules */}
        <div className="footer-section">
          <h3>Modules</h3>
          <ul>
            <li>Student Management</li>
            <li>Fee Management</li>
            <li>Employee Management</li>
            <li>Certificate Management</li>
            <li>Transport Management</li>
            <li>Exam Management</li>
            <li>Report Management</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>School ERP</li>
            <li>Email Services</li>
            <li>Website Design</li>
            <li>Digital Marketing</li>
            <li>Domain & Hosting</li>
            <li>Wordpress Development</li>
            <li>E-commerce Development</li>
            <li>Android App Development</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <button
            className="enquiry-btn"
            onClick={() => setShowForm(true)}
          >
            Get in Touch
          </button>

          <div className="social-icons">
            <a href="https://wa.me/919876554322" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="#"><FaLinkedin /> LinkedIn</a>
            <a href="#"><FaFacebook /> Facebook</a>
            <a href="#"><FaInstagram /> Instagram</a>
            <a href="#"><FaYoutube /> YouTube</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Policies Section */}
      <div className="footer-policies">
        <div>Sitemap</div>
        <div>Privacy Policy</div>
        <div>Cancellation and Refund Policy</div>
        <div>Shipping and Delivery Policy</div>
        <div>Terms & Conditions</div>
      </div>

      {/* Show Enquiry Form Popup */}
      {showForm && <EnquiryForm onClose={() => setShowForm(false)} />}
    </footer>
  );
}

export default Footer;
