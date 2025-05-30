import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section text-white">
      <div className="footer-container container">
        <div className="footer-top d-flex justify-content-between align-items-center flex-wrap">
          <h3 className="m-0">🧑‍💻 Open to Work</h3>
          <button
            className="btn-contact-me"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>

        <div className="footer-main row text-center text-md-start mt-5 reveal">
          <div className="col-md-4 mb-4">
            <h5>🚀 Portfolio</h5>
            <p className="small">
              &copy; 2025 All rights reserved <br />
              Built with ❤️ by <strong>Sushil Dangoriya</strong>
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>🔗 Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>🌐 Social</h5>
            <ul className="social-icons list-unstyled d-flex justify-content-center justify-content-md-start gap-4">
              <li>
                <a
                  href="https://github.com/sushil-40"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <a
                href="https://www.linkedin.com/in/sushil-dangoriya-b74a61b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
