import React, { useState } from "react";
import { postNewMessage } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

const Contact = () => {
  const iconStyle = {
    color: "#f5f5f5",
    fontSize: "1.8rem",
    margin: "0 1rem",
    transition: "transform 0.3s ease",
  };

  const [formData, setFormData] = useState({
    subject: "Message from contact form",
    name: "",
    email: "",
    message: "",
  });
  // const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start Loading
    try {
      const result = await postNewMessage(formData);
      console.log(result);
      if (result?.status === "success") {
        toast.success("Email sent successfully!");

        setFormData({
          subject: "Message from contact form",
          name: "",
          message: "",
          email: "",
        });
      } else {
        toast.error("Failed to send email. Try again !");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try later!");
    } finally {
      setLoading(false); // Stop Loading
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
            <form name="send-message" onSubmit={handleOnSubmit}>
              <div className="mb-3 text-white">
                <input
                  type="text"
                  name="name"
                  className="form-control contact-input "
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn contact-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending .....
                    </>
                  ) : (
                    "🚀 Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
