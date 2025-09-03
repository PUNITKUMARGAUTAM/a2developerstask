import React, { useState } from "react";
import axios from "axios";
import "./store.css";

function Store({ isOpen, onClose }) {
  const [store, setStore] = useState({
    name: "",
    email: "",
    mobile: "",
    institution: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/store", store);
    alert("Sign Up Successful");
    console.log(response.data);
    onClose(); 
  };

  return (
    <div className={`form-container ${isOpen ? "active" : ""}`}>
      <div className="form-header">
        <h2>Get In Touch</h2>
        <p>
          Have questions about our Products? Fill out the form below to get a
          call with us.
        </p>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <form onSubmit={handleSubmit}>

        <label>Name *</label>
        <input type="text"name="name"value={store.name}onChange={handleChange}required/>

        <label>Email *</label>
        <input type="email"name="email"value={store.email}onChange={handleChange}required/>

        <label>Contact Number *</label>
        <div className="phone-input">
          <span>+91</span>

          <input type="tel"name="mobile"value={store.mobile}onChange={handleChange}required/>
        </div>

        <label>Institution Name *</label>
        <input type="text"name="institution"value={store.institution}onChange={handleChange}required/>

        <label>Requirements</label>
        <textarea name="requirements"value={store.requirements}onChange={handleChange}></textarea>

        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Store;