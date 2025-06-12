// second edition

import React, { useEffect, useState } from "react";
import flickStoreImage from "../assets/completed-projects/flickstore.png";
import contactListImage from "../assets/completed-projects/contactlist.webp";
import prankCalculatorImage from "../assets/completed-projects/prankcalculator.png";
import timewiseImage from "../assets/completed-projects/timewise.png";
import tictactoeImage from "../assets/completed-projects/tictacImage.png";
import rockPaperScissorImage from "../assets/completed-projects/rockPaperScissor.png";
import currencyConverterImage from "../assets/completed-projects/currencyConverter.png";
import financeTrackerImage from "../assets/completed-projects/finance-tracker.png";

import contactListDemo from "../assets/video-demo/contact-list-demo.mp4";
import flickStoreDemo from "../assets/video-demo/flick-store-demo.mp4";
import timewiseDemo from "../assets/video-demo/time-wise-demo.mp4";
import prankCalculatorDemo from "../assets/video-demo/prank-calculator-demo.mp4";
import financeTrackerDemo from "../assets/video-demo/finance_tracker.mp4";
const projects = [
  {
    id: 1,
    title: "FlickStore",
    description: "Movie search & save app (React)",
    fullDescription:
      "Flick Store is a modern, responsive web application built with React that allows users to search for movies using the TMDb API and curate a personalized list of favorites. With a clean user interface, smooth carousel integration via react-slick, and seamless local storage support, users can add or remove movies and have their selections persist across sessions—all without needing an account or backend. Designed as both a fun movie management tool and a portfolio project, Flick Store showcases practical front-end development skills, including API integration, state management with hooks, component-based architecture, and responsive design principles.",
    image: flickStoreImage,
    gitLink: "https://github.com/sushil-40/FlickStore/blob/main/src/App.jsx",
    siteLink: "https://flick-store.vercel.app/",
    size: "grid-span-2", // wide
    projectDemo: { video: flickStoreDemo },
    technologyUsed: ["Html5", "Css3", "React", "Javascript", "Bootstrap"],
  },
  {
    id: 2,
    title: "TimeWise",
    description: "Task tracker with time analytics",
    image: timewiseImage,
    link: "https://github.com/yourname/timewise",
    size: "",
    projectDemo: { video: timewiseDemo },
    technologyUsed: ["Html5", "Css3", "Javascript"],
  },
  {
    id: 3,
    title: "Prank Calculator",
    description: "A fun calculator that lies!",
    fullDescription:
      "📝 Project Description: Prank Calculator Prank Calculator is a fun and interactive twist on a basic calculator built with React. At its core, it performs all standard arithmetic operations — addition, subtraction, multiplication, division, and percentage. However, unlike a typical calculator, this one has a secret prank feature: it randomly gives an incorrect result, plays a sound effect, and applies a visual glitch to surprise the user. The project demonstrates how basic utility apps can be enhanced with creative logic, animations, and media to engage users in unexpected ways. It's a great example of combining practical coding skills with playful UX design.",
    image: prankCalculatorImage,
    gitLink: "https://github.com/sushil-40/prank-calculator-using-react",
    siteLink: "https://prank-calculator-using-react-4f8uqlaqg.vercel.app/",
    size: "",
    projectDemo: { video: prankCalculatorDemo },
    technologyUsed: ["Html5", "Css3", "Javascript", "React"],
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "Manage daily finances smartly",
    fullDescription:
      "Finance Tracker is a full-stack, responsive web application developed using React for the frontend and Node.js/Express for the backend. It helps users manage their income and expenses efficiently, offering real-time balance tracking and intuitive insights through Nivo-powered bar, pie, and line charts. The app features secure user authentication with JWT and password protection using bcrypt hashing, ensuring data safety. With a clean, mobile-friendly interface, Finance Tracker showcases my skills in frontend development, backend integration, data visualization, and secure user authentication. It also sets the stage for future enhancements like budgeting goals and financial reports.",
    image: financeTrackerImage,
    gitLink: "https://github.com/sushil-40/FinanceTracker_Client",
    siteLink: "https://finance-tracker-client-nu.vercel.app/",
    size: "grid-span-2-2",
    projectDemo: { video: financeTrackerDemo },
    technologyUsed: [
      "Html5",
      "Css3",
      "Bootstrap",
      "Javascript",
      "React",
      "Mongodb",
      "Express",
      "Node",
    ],
  },
  {
    id: 5,
    title: "Contact List",
    description: "Contacts app with mobile UI",
    fullDescription:
      "The Contact List App is a fully responsive, interactive web application designed to simulate a mobile-style contact management interface. It fetches real user data from the RandomUser API and displays it in an accordion layout, allowing users to view, search, and filter contact information by gender.This project mimics a mobile screen experience starting with a Slide to Unlock feature, followed by an engaging user interface. Contacts include images, names, phone numbers, email addresses, and clickable location links that open in Google Maps. A live pie chart visualizes the gender breakdown of the fetched contacts using Chart.js. It's a great example of how to combine API integration, DOM manipulation, event handling, and data visualization using pure JavaScript and Bootstrap. The app is ideal for showcasing front-end skills in portfolio projects or learning about real-time search, filtering, and modal interactions.",
    image: contactListImage,
    gitLink: "https://github.com/sushil-40/Contact-List",
    siteLink: "https://sushil-40.github.io/Contact-List/",
    size: "grid-span-2-2",
    projectDemo: { video: contactListDemo },
    technologyUsed: ["Html5", "Css3", "Javascript", "Bootstrap"],
  },

  {
    id: 6,
    title: "Balancing Beads",
    description: "Tire balancing calculator",
    image: "/images/beads.png",
    link: "https://github.com/yourname/balancing-beads",
    size: "", // big square
    technologyUsed: ["Html5", "Css3", "Javascript", "Bootstrap"],
  },

  {
    id: 7,
    title: "Tic Tac Toe",
    description: "Fun game 😁",
    fullDescription:
      "Tic Tac Toe is a classic two-player game recreated using HTML, CSS, and JavaScript. This mini project allows two users to play locally by taking turns marking X and O on a 3x3 grid. The game includes interactive logic to detect winners and ties using predefined win patterns, and provides visual feedback through color-coded moves and dynamic messages. Players can reset the game at any point using the Reset or New Game buttons. It's a great example of DOM manipulation, event handling, and array-based game logic in JavaScript — ideal for beginners and those improving front-end development skills.",
    image: tictactoeImage,
    gitLink: "https://github.com/sushil-40/tic-tac-toe",
    siteLink: "https://sushil-40.github.io/tic-tac-toe/",
    size: "",
    technologyUsed: ["Html5", "Css3", "Javascript", "Bootstrap"],
  },
  {
    id: 8,
    title: "Rock Paper Scissor",
    description: "Mini game 🫠",
    fullDescription:
      "Rock Paper Scissors is a beginner-friendly web-based game designed for hands-on practice with JavaScript fundamentals such as DOM manipulation, event handling, conditional logic, and dynamic UI updates. It's ideal for learning how to build interactive games and projects using only front-end technologies.",
    image: rockPaperScissorImage,
    gitLink: "https://github.com/sushil-40/RockPaperScissors",
    siteLink: "https://sushil-40.github.io/RockPaperScissors/",
    size: "",
    technologyUsed: ["Html5", "Css3", "Javascript", "Bootstrap"],
  },
  {
    id: 9,
    title: "Currency Converter",
    description: "Online Currency Converter",
    fullDescription:
      "The Currency Converter is a simple web-based application developed for educational purposes, designed to help users convert amounts between different currencies using real-time exchange rates fetched from a public API. It features an interactive UI where users can input an amount, select source and target currencies, and view the converted value instantly. The app dynamically displays country flags based on selected currencies, enhancing user experience. Built with HTML, CSS, and vanilla JavaScript, this project demonstrates API integration, DOM manipulation, and responsive design without relying on any external JavaScript frameworks.",
    image: currencyConverterImage,
    gitLink: "https://github.com/sushil-40/Currency-Converter",
    siteLink: "https://sushil-40.github.io/Currency-Converter/",
    size: "",
    technologyUsed: ["Html5", "Css3", "Javascript", "Bootstrap"],
  },
  // {
  //   id: 10,
  //   title: "Finance Tracker",
  //   description: "Manage daily finances smartly",
  //   image: "/images/finance.png",
  //   link: "https://github.com/yourname/finance-tracker",
  //   size: "",
  // },
  // {
  //   id: 11,
  //   title: "Finance Tracker",
  //   description: "Manage daily finances smartly",
  //   image: "/images/finance.png",
  //   link: "https://github.com/yourname/finance-tracker",
  //   size: "",
  // },
  // {
  //   id: 12,
  //   title: "Finance Tracker",
  //   description: "Manage daily finances smartly",
  //   image: "/images/finance.png",
  //   link: "https://github.com/yourname/finance-tracker",
  //   size: "",
  // },
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
                <a href={selectedProject.gitLink} style={{ cursor: "pointer" }}>
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
                {/* <p>Html, Css, JavaScript, React</p> */}

                {/* <ul>
                  {selectedProject.technologyUsed.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))} 
               
                </ul> */}
                <p> {selectedProject.technologyUsed.join(", ")}</p>
                <hr />
                <h4 style={{ color: "SlateBlue" }}>
                  Description <hr className="container" />
                </h4>
                <p>{selectedProject.fullDescription}</p>
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
