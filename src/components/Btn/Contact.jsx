import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCall = () => {
    window.location.href = 'tel:0414105048';
    setIsOpen(false);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:paulafa8@gmail.com';
    setIsOpen(false);
  };

  return (
    <div className="contact-button-container">
      {/* Button */}
      <button
        className={`contact-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Contact menu"
      >
       <span className="contact-label">Contact me</span>
      
      </button>

      {/* Options */}
      <div className={`contact-options ${isOpen ? 'open' : ''}`}>
        <button
          className="contact-option phone"
          onClick={handleCall}
          aria-label="Call"
        >
          <Phone className="icon" size={20} />
          <span className="label">Call 0414 105 048</span>
        </button>

        <button
          className="contact-option email"
          onClick={handleEmail}
          aria-label="Email"
        >
          <Mail className="icon" size={20} />
          <span className="label">paulafa8@gmail.com</span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="contact-overlay" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default ContactButton;