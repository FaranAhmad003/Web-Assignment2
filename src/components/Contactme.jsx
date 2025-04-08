// src/components/ContactSection.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ContactMe.css';
import TopBar from './TopBar';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/d/e/1FAIpQLSd7vHGo0M25OmrBmCzxFwcmWQ2NUUTEbNGEL9cq5I2-08GzTQ/formResponse';

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <TopBar />
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Contact Me</h2>

        <form
          className="contact-form"
          action={GOOGLE_FORM_ACTION}
          method="POST"
          target="_blank"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="entry.323424333" 
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="entry.1068956994" 
            placeholder="Your Email"
            required
          />
          <textarea
            name="entry.1836383750"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>

          <button type="submit">Send Message</button>
          {submitted && <p className="success-message">Message sent successfully!</p>}
        </form>
      </section>
    </>
  );
};

export default ContactSection;
