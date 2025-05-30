// second edition

import React, { useEffect, useState } from "react";
import flickStoreImage from "../assets/completed-projects/flickstore.png";
import contactListImage from "../assets/completed-projects/contactlist.webp";
import prankCalculatorImage from "../assets/completed-projects/prankcalculator.png";
import timewiseImage from "../assets/completed-projects/timewise.png";
// import flickStoreImage from "../assets/completed-projects/flickstore.png";
// import flickStoreImage from "../assets/completed-projects/flickstore.png";
// import flickStoreImage from "../assets/completed-projects/flickstore.png";

import contactListDemo from "../assets/video-demo/contact-list-demo.mp4";
import flickStoreDemo from "../assets/video-demo/flick-store-demo.mp4";
import timewiseDemo from "../assets/video-demo/time-wise-demo.mp4";
import prankCalculatorDemo from "../assets/video-demo/prank-calculator-demo.mp4";
const projects = [
  {
    id: 1,
    title: "FlickStore",
    description: "Movie search & save app (React)",
    image: flickStoreImage,
    link: "https://github.com/yourname/flickstore",
    size: "grid-span-2", // wide
    projectDemo: { video: flickStoreDemo },
  },
  {
    id: 2,
    title: "TimeWise",
    description: "Task tracker with time analytics",
    image: timewiseImage,
    link: "https://github.com/yourname/timewise",
    size: "",
    projectDemo: { video: timewiseDemo },
  },
  {
    id: 3,
    title: "Prank Calculator",
    description: "A fun calculator that lies!",
    image: prankCalculatorImage,
    link: "https://github.com/yourname/prank-calculator",
    size: "",
    projectDemo: { video: prankCalculatorDemo },
  },
  {
    id: 4,
    title: "Contact List",
    description: "Contacts app with mobile UI",
    image: contactListImage,
    link: "https://github.com/yourname/contact-list",
    size: "grid-span-2-2",
    projectDemo: { video: contactListDemo },
  },
  {
    id: 5,
    title: "Balancing Beads",
    description: "Tire balancing calculator",
    image: "/images/beads.png",
    link: "https://github.com/yourname/balancing-beads",
    size: "grid-span-2-2", // big square
  },

  {
    id: 6,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 7,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 8,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 9,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 10,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 11,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
  {
    id: 12,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    image: "/images/finance.png",
    link: "https://github.com/yourname/finance-tracker",
    size: "",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const offcanvasE1 = document.getElementById("projectOffcanvas");
    const handleHidden = () => {
      setSelectedProject(null); //clear the selected project
    };
    if (offcanvasE1) {
      offcanvasE1.addEventListener("hidden.bs.offcanvas", handleHidden);
    }
    return () => {
      if (offcanvasE1) {
        offcanvasE1.removeEventListener("hidden.bs.offcanvas", handleHidden);
      }
    };
  }, []);
  const handleCardClick = (project) => {
    setSelectedProject(project);
    const offcanvasEl = document.getElementById("projectOffcanvas");
    const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasEl);
    bsOffcanvas.show();
  };

  return (
    <section
      id="projects"
      className="projects-section bg-dark py-5 px-3 px-md-5 min-vh-100 text-white section-bottom-border"
    >
      <div className="text-center mb-5">
        <h2>Projects</h2>
      </div>

      <div className="bento-grid container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bento-card ${project.size}`}
            style={{ cursor: "pointer" }}
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="bento-overlay">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Offcanvas Panel */}
      <div
        className="offcanvas offcanvas-end text-bg-dark w-75"
        tabIndex="-1"
        id="projectOffcanvas"
        aria-labelledby="projectOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="projectOffcanvasLabel">
            {selectedProject?.title}
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            {" "}
          </button>
        </div>
        <div className="offcanvas-body">
          {selectedProject && (
            <>
              <div className="video-demo d-flex justify-content-center align-items-center w-100 ">
                <video
                  preload="metadata"
                  controls
                  muted
                  poster={selectedProject?.img?.path}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    height: "65vh",
                  }}
                >
                  <source
                    src={selectedProject?.projectDemo?.video}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div
                className="link d-flex flex-wrap gap-5 justify-content-center align-items-center"
                style={{ color: "Violet", fontSize: "35px" }}
              >
                {/* <a href=""> */}
                <a
                  href={selectedProject.gitHubLink}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                {/* <a href=""> */}
                <a
                  href={selectedProject.siteLink}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="project-details text-center">
                <h5 style={{ color: "SlateBlue" }}>
                  Technology Used <hr className="container" />
                </h5>
                <p>Html, Css, JavaScript, React</p>
                <hr />
                <h4 style={{ color: "SlateBlue" }}>
                  Description <hr className="container" />
                </h4>
                <p>{selectedProject.description}</p>
                <hr />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
