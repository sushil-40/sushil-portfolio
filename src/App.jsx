import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from "../src/index.js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    // Smooth scroll to sections
    // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    //   anchor.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelecor(this.getAttribute("href")).scrollIntoView({
    //       behavior: "smooth",
    //     });
    //   });
    // });

    // reveal on scroll
    const sections = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
