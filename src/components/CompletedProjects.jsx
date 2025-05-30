import React from "react";

const CompletedProjects = () => {
  return (
    <div id="all-projects">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="title completed-project">
                Explore Completed Projects
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="projects-grid">
                {projectList.map((project, i) => {
                  return (
                    <div key={i} className="project">
                      <img
                        src={project.img.path}
                        alt={project.img.alt}
                        // height={50}
                        // width={50}
                      />

                      <div className="project-content">
                        <div className="links">
                          <a href={project.gitHubLink}>
                            <i className="fa-brands fa-github"></i>
                          </a>
                          <a href={project.siteLink}>
                            <i className="fa-brands fa-chrome"></i>
                          </a>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description.slice(0, 100) + " ...."}</p>
                        <button
                          className="btn project-btn btn-tertiary"
                          onClick={() => toggleOffcanvas(project.id)}
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasWithBothOptions"
                          aria-controls="offcanvasWithBothOptions"
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  );
                })}

                <div
                  className={`offcanvas offcanvas-end w-50  text-bg-dark ${
                    showOffcanvas ? "show" : ""
                  }`}
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                  // onHide={() => setToggledProject(null)}
                >
                  <div className="offcanvas-header d-flex justify-content-center align-items-center gap-5">
                    <div>
                      <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                      >
                        {/* Backdrop with scrolling */}
                        {toggledProject?.title}
                      </h5>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={toggleOffcanvas}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                  <div className="offcanvas-body">
                    {toggledProject?.projectDemo && (
                      <>
                        <div className="video-demo d-flex justify-content-center align-items-center w-100">
                          <video
                            preload="metadata"
                            controls
                            poster={toggledProject?.img?.path}
                            style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                              display: "block",
                            }}
                          >
                            <source
                              src={toggledProject?.projectDemo?.video}
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
                          <a href={toggledProject.gitHubLink}>
                            <i className="fa-brands fa-github"></i>
                          </a>
                          {/* <a href=""> */}
                          <a href={toggledProject.siteLink}>
                            <i className="fa-brands fa-chrome"></i>
                          </a>
                        </div>
                        <div className="project-details">
                          <h4 style={{ color: "SlateBlue" }}>
                            Technology Used <hr className="container" />
                          </h4>
                          <p>Html, Css, JavaScript, React</p>
                          <hr />
                          <h4 style={{ color: "SlateBlue" }}>
                            Description <hr className="container" />
                          </h4>
                          <p>{toggledProject.description}</p>
                          <hr />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="title running-project" style={{ width: "80%" }}>
                Explore Running Projects
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <RunningProject />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
