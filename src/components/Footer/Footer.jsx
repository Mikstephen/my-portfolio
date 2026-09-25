import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              Stephen<span>.</span>
            </a>

            <p>
              Frontend & Mobile App Developer
            </p>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Mikstephen"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Stephen Lawal. All rights reserved.
          </p>

          <a href="#" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;