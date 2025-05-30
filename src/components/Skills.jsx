import React, { useEffect, useState } from "react";

const Skills = () => {
  const [HoveredIndex, setHoveredIndex] = useState(null);

  const skillList = [
    {
      title: "HTML5",
      iconClass: "fab fa-html5",
      color: "#E34C26",
      id: "number-h",
      target: 85,
    },
    {
      title: "CSS3",
      iconClass: "fab fa-css3-alt",
      color: "#1572B6",
      id: "number-c",
      target: 65,
    },
    {
      title: "JavaScript",
      iconClass: "fab fa-js",
      color: "#F7DF1E",
      id: "number-j",
      target: 70,
    },
    {
      title: "React",
      iconClass: "fab fa-react",
      color: "#61DAFB",
      id: "number-r",
      target: 75,
    },
    {
      title: "Node.js",
      iconClass: "fab fa-node",
      color: "#339933",
      id: "number-n",
      target: 70,
    },
    {
      title: "MongoDB",
      iconClass: "fas fa-database",
      color: "#4DB33D",
      id: "number-m",
      target: 65,
    },
  ];
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const SkillCounter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const runCounter = () => {
        setCount(0); // Reset Count
        let currentCount = 0;

        const interval = setInterval(() => {
          if (currentCount >= target) {
            clearInterval(interval);
          } else {
            currentCount += 1;
            setCount(currentCount);
          }
        }, 30);
      };
      runCounter(); // run counter initially
    }, [target]);
    return <>{count}%</>;
  };

  return (
    <section
      id="skills"
      className="skills-section bg-dark text-white py-5 section-bottom-border"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div
              className="skill animated fadeInUp"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <i className={skill.iconClass} style={{ color: skill.color }}></i>
              <h3>{skill.title}</h3>
              {HoveredIndex === index ? (
                <div className="progressbar">
                  <div className="outer-progressbar ">
                    <div className="inner-progressbar flex-center">
                      <div id={skill.id}>
                        <SkillCounter
                          target={skill.target}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
