import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section bg-dark text-white py-5 ">
      <div className="container">
        <div className="title text-center mb-4">
          <h2>About</h2>
        </div>

        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 about-left-content">
            {/* <div className="about-left-content w-100 h-100"></div> */}
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6">
            <div className="my-bio reveal">
              <p>
                Hi! I'm <span>Sushil Dangoriya</span>, a passionate web
                developer with a strong focus on creating dynamic, responsive,
                and user-friendly websites. With experience in front-end and
                back-end development, I bring ideas to life with clean,
                efficient code. I’m always looking for new challenges and
                opportunities to collaborate on exciting projects. If you're
                looking for someone who can deliver visually appealing and
                functional web solutions, let's connect!
              </p>

              <p>Brisbane, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
