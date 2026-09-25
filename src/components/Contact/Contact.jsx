import { useState } from "react";
import "./Contact.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <AnimatedSection>
      <div className="contact-container">

        <div className="contact-info">
          <p className="section-label">CONTACT</p>

          <h2>
            Let's work
            <br />
            together.
          </h2>

          <p className="contact-description">
            Have a project, opportunity, or just want to
            connect? Feel free to reach out.
          </p>

          <div className="contact-links">

            <a
              href="https://wa.me/2349024338185?text=Hello%20Stephen,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
            >
              <span>WhatsApp</span>
              (234) 902-433-8185
            </a>


            <a href="mailto:mikforge@gmail.com">
              <span>Email</span>
              mikforge@gmail.com
            </a>

            <a
              href="https://github.com/Mikstephen"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              Mikstephen
            </a>

            <a
              href="https://www.linkedin.com/in/lawal-stephen-oluwakorede-322a40262/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              LinkedIn Profile
            </a>

          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "success" && <p className="form-status success">Message sent!</p>}
          {status === "error" && <p className="form-status error">Something went wrong. Try again.</p>}

        </form>

      </div>
      </AnimatedSection>
    </section>
  );
}

export default Contact;