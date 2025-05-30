// import React from "react";

// const Contact = () => {
//   const iconStyle = {
//     color: "rgba(245, 231, 231, 0.88)",
//     fontSize: "1.5rem",
//     marginRight: "1rem",
//   };

//   return (
//     <section id="contact" className="py-5 bg-dark text-white">
//       <div className="container">
//         <div className="title text-center mb-4">
//           <h2>Contact</h2>
//         </div>
//         {/* Social Icons */}
//         <div className="d-flex justify-content-center mb-4">
//           <a
//             href="https://www.linkedin.com/in/sushil-dangoriya-b74a61b7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="me-3"
//           >
//             <i className="fa-brands fa-linkedin" style={iconStyle}></i>
//           </a>
//           <a
//             href="https://github.com/sushil-40"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i
//               className="fa-brands fa-github"
//               style={{ fontSize: "1.5rem", color: "white" }}
//             ></i>
//           </a>
//         </div>

//         {/* Text */}
//         <p className="text-center mb-4">
//           I'd love to hear from you! Whether it's a project, job opportunity, or
//           just a chat.
//         </p>

//         {/* Contact Form */}
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <form>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-control"
//                   rows="5"
//                   placeholder="Your Message"
//                   required
//                 ></textarea>
//               </div>
//               <div className="text-center">
//                 <button type="submit" className="btn btn-primary">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  const iconStyle = {
    color: "#f5f5f5",
    fontSize: "1.8rem",
    margin: "0 1rem",
    transition: "transform 0.3s ease",
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
            <form>
              <div className="mb-3 text-white">
                <input
                  type="text"
                  className="form-control contact-input "
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control contact-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control contact-input"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn contact-btn">
                  🚀 Send Message
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
