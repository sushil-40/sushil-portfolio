import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const iconStyle = {
    color: "#f5f5f5",
    fontSize: "1.8rem",
    margin: "0 1rem",
    transition: "transform 0.3s ease",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending......");

    try {
      await axios.post("http://localhost:8000/contact", {
        to: "sushildangoriya40@gmail.com",
        subject: `Message from ${formData.name}`,
        message: `<b>Message</b>: \n\n ${formData.message}`,
      });
      setStatus("Message sent successfully! ✔️");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      setStatus("Failed to send message. Try again later !");
    }
  };
  return (
    <section id="contact" className="contact-section py-5 bg-dark text-white">
      <div className="container">
        <div className="title text-center mb-4">
          <h2>Let's Connect</h2>
          <p className="contact-text small">
            I'd love to hear from you! Whether it's a project, job opportunity,
            or just a chat.
          </p>
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://www.linkedin.com/in/sushil-dangoriya-b74a61b7"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/sushil-40"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form name="send-message" onSubmit={handleSubmit}>
              <div className="mb-3 text-white">
                <input
                  type="text"
                  name="name"
                  className="form-control contact-input "
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control contact-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control contact-input"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn contact-btn">
                  🚀 Send Message
                </button>
              </div>
              <p className="text-center mt-2">{status}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
