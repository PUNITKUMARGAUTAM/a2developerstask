// src/components/EnquiryForm.js
import React, { useState } from "react";
import axios from "axios";
import "./EnquiryForm.css";

// FontAwesome Close Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function EnquiryForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    institutionname: "",
    requirements: "",
  });

  // input change handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/enquiry/addEnquiry", formData);
      alert("✅ Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contactno: "",
        institutionname: "",
        requirements: "",
      });
      onClose(); // modal close after submit
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit enquiry");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Close Button (Top Right Corner) */}
        <button type="button" className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2 className="modal-title">📩 Submit Your Enquiry</h2>
        <form onSubmit={handleSubmit} className="enquiry-form">
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="phone-input">
            <span className="phone-prefix">+91</span>
            <input
              type="number"
              name="contactno"
              placeholder="Contact Number"
              value={formData.contactno}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="institutionname"
            placeholder="🏫 Institution Name"
            value={formData.institutionname}
            onChange={handleChange}
            required
          />
          <textarea
            name="requirements"
            placeholder="✍️ Your Requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
          />
          <div className="modal-actions">
            <button type="submit" className="enquiry-btn">
              🚀 Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EnquiryForm;
