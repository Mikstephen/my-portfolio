import { useState, useEffect } from "react";
import "./Projects.css";

import rigzo1 from "../../assets/rigzo-1.png";
import rigzo2 from "../../assets/rigzo-2.png";
import rigzo3 from "../../assets/rigzo-3.png";
import rigzo4 from "../../assets/rigzo-4.png";
import rigzo5 from "../../assets/rigzo-5.png";
import rigzo6 from "../../assets/rigzo-6.png";

import walletvalet1 from "../../assets/walletvalet-1.png";
import walletvalet2 from "../../assets/walletvalet-2.png";
import walletvalet3 from "../../assets/walletvalet-3.png";
import walletvalet4 from "../../assets/walletvalet-4.png";
import walletvalet5 from "../../assets/walletvalet-5.png";
import walletvalet6 from "../../assets/walletvalet-6.png";

import taskerly1 from "../../assets/taskerly-1.png";
import taskerly2 from "../../assets/taskerly-2.png";
import taskerly3 from "../../assets/taskerly-3.png";
import taskerly4 from "../../assets/taskerly-4.png";
import taskerly5 from "../../assets/taskerly-5.png";
import taskerly6 from "../../assets/taskerly-6.png";

import AnimatedSection from "../AnimatedSection/AnimatedSection";

function ProjectSlider({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  const first = index % images.length;
  const second = (index + 1) % images.length;

  return (
    <div className="project-image">
      <img key={`a-${first}`} src={images[first]} alt={`${title} screenshot ${first + 1}`} />
      <img key={`b-${second}`} src={images[second]} alt={`${title} screenshot ${second + 1}`} />
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Rigzo App",
      images: [
      rigzo1,
      rigzo2,
      rigzo3,
      rigzo4,
      rigzo5,
      rigzo6,
    ],

      description:
        "A mobile application with wallet management, crypto and fiat transactions, asset trading, QR code generation and biometric security.",
      technologies: [
        "Flutter",
        "Riverpod",
        "GoRouter",
        "Dio",
        "Firebase",
      ],
      github: "https://github.com/Mikstephen",
    },

    {
      title: "WalletValet",
      images: [
      walletvalet1,
      walletvalet2,
      walletvalet3,
      walletvalet4,
      walletvalet5,
      walletvalet6,
    ],

      description:
        "A financial application featuring dashboard interfaces, transaction histories and wallet balances with secure authentication and payment workflows.",
      technologies: [
        "Flutter",
        "Riverpod",
        "Dio",
        "REST API",
      ],
      github: "https://github.com/Mikstephen",
    },

    {
      title: "Taskerly",
      images: [
      taskerly1,
      taskerly2,
      taskerly3,
      taskerly4,
      taskerly5,
      taskerly6,
    ],
      description:
        "A mobile application project focused on creating a practical and user-friendly task management experience.",
      technologies: [
        "Flutter",
        "Dart",
        "Mobile UI",
      ],
      github: "https://github.com/usetaskerly/mobileapp",
    },
  ];

  return (
    <section id="projects" className="projects">
      <AnimatedSection>
      <div className="projects-container">

        <div className="projects-header">
          <div>
            <p className="section-label">PROJECTS</p>

            <h2>
              Selected
              <br />
              work.
            </h2>
          </div>

          <p className="projects-intro">
            A selection of applications I've worked on,
            focusing on practical functionality, clean
            interfaces and user experience.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
               style={{
              "--delay": `${index * 0.2}s`,
            }}
            >

             <div className="project-image-wrapper">
              <div className="project-number">
                0{index + 1}
              </div>

              <ProjectSlider
                images={project.images}
                title={project.title}
              />

            </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default Projects;