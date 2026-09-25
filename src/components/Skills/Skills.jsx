import "./Skills.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      skills: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
      number: "02",
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    },
    {
      number: "03",
      title: "APIs & Tools",
      skills: ["REST APIs", "Dio", "Firebase", "Git", "GitHub"],
    },
    {
      number: "04",
      title: "Cloud",
      skills: ["AWS"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <AnimatedSection>
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">SKILLS</p>

          <h2>
            Technologies I use
            <br />
            to build.
          </h2>

          <p className="skills-description">
            A selection of technologies and tools I'm
            learning and using to build web and mobile
            applications.
          </p>
        </div>

        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>

              <div className="skill-number">
                {group.number}
              </div>

              <div className="skill-group-content">
                <h3>{group.title}</h3>

                <div className="skill-items">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default Skills;