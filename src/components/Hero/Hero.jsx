import "./Hero.css";
import photo from "../../../public/stephen.jpg";

function Hero() {
  return (
    <section className="hero">

      {/* Portrait */}
      <div className="hero-photo-wrap">
        <img
          src={photo}
          alt="Stephen Lawal"
          className="hero-photo"
        />
      </div>

      <div className="hero-inner">

        {/* Vertical sidebar */}
        <aside className="hero-sidebar">
          <span className="sidebar-role">
            App Developer
          </span>

          <div className="sidebar-line"></div>

          <span className="sidebar-year">
            2026
          </span>
        </aside>

        {/* Main content */}
        <div className="hero-body">

          {/* Stats */}
          <div className="hero-stats">

            <div className="stat">
              <span className="stat-number">+10</span>
              <span className="stat-label">
                Projects completed
              </span>
            </div>

            <div className="stat">
              <span className="stat-number">+3</span>
              <span className="stat-label">
                Apps shipped
              </span>
            </div>

          </div>

          {/* Main heading */}
          <div className="hero-heading">

            <h1 className="hero-hello">
              Hello
            </h1>

            <p className="hero-sub">
              — It's Stephen, a frontend &amp; mobile developer
            </p>

          </div>

          {/* Scroll */}
          <a href="#projects" className="hero-scroll">
            Scroll down ↓
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;