import React, { useState } from "react";
import "./Styles/Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send the data to your backend or an email service
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Thank you for your message!");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Let me a message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
