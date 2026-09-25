import "./About.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

function About() {
  return (
    <section id="about" className="about">
      <AnimatedSection>
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building digital
            <br />
            experiences.
          </h2>
        </div>

        <div className="about-content">
          <p className="about-intro">
            I'm Stephen Lawal, a frontend and mobile app
            developer focused on building modern and
            user-friendly digital experiences.
          </p>

          <p>
            I enjoy turning ideas and designs into functional
            applications, with a focus on clean interfaces,
            responsive layouts and practical user experiences.
          </p>

          <p>
            I've worked on projects involving financial
            dashboards, wallet management, transactions,
            API integrations and mobile application features.
          </p>

          <div className="about-details">

            <div className="about-detail">
              <span>01</span>
              <div>
                <h3>Mobile Development</h3>
                <p>
                  Building modern mobile interfaces and
                  application features.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>
              <div>
                <h3>Frontend Development</h3>
                <p>
                  Creating responsive and user-focused
                  web interfaces.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>
              <div>
                <h3>API Integration</h3>
                <p>
                  Connecting applications with backend
                  services and REST APIs.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default About;