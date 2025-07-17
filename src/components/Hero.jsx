import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-dark d-flex hero-section justify-content-center align-items-center  min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-br from-gray-900 to-black text-white "
    >
      <motion.div
        className="md:w-1/2 w-full text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className=" text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Sushil Dangoriya
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Web Developer | React | Node.js
        </p>
        <a href="#" className="inline-block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-2xl"
          >
            ↓
          </motion.div>
        </a>
        {/* Buttons below arrow */}
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-5">
          <a
            href="/file-assets/resume-sushil.pdf"
            className="btn btn-outline-light btn-lg "
            download="sushil-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a href="#projects" className="btn btn-info btn-lg btn-project">
            Explore My Projects
          </a>
        </div>
      </motion.div>
      {/* <div className="section-bottom-border"></div> */}
    </section>
  );
};

export default Hero;
