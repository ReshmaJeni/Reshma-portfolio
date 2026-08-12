import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-image">
    <img src="/profile1.jpg" alt="Reshma" className="profile1-img" />
  </div>
        <div className="hero-content">
  <h1>Hi, I'm Reshma M</h1>
  <h2>MCA Graduate</h2>

  <p className="typing-text">
  <Typewriter
    words={[
      "Aspiring Data Analyst",
      "Data Analyst & Web Developer",
      "Python Programmer",
      "SQL Enthusiast"
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</p>
<p className="hero-desc">
  Passionate about building modern web applications using React, Python and SQL.
</p>
  <a href="/resume.docx" download>
    <button>Download Resume</button>
  </a>
</div>
      </section>
      <About />
      <Skills />
      {/* Projects */}
<section className="projects" id="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <h3>Competition Billing System</h3>
    <p>
      Developed a billing system to manage products, calculate totals,
      and generate bills efficiently, improving billing accuracy and
      reducing manual effort.
    </p>
  </div>

  <div className="project-card">
    <h3>Smart Expense Tracker</h3>
    <p>
      Designed and developed an expense tracking application that enables
      users to record expenses, categorize spending, and monitor budgets
      effectively.
    </p>
  </div>

  <div className="project-card">
    <h3>Secure Attribute-Based Data Sharing in Cloud</h3>
    <p>
      Developed a secure cloud-based data sharing system using encryption
      techniques to ensure data privacy and secure access.
    </p>
  </div>
</section>

{/* Contact */}
<section className="contact" id="contact">
  <h2>Contact Me</h2>

  <p>
  <FaEnvelope className="contact-icon" />
  reshmaguru665@gmail.com
</p>

<p>
  <FaPhoneAlt className="contact-icon" />
  +91 8438952199
</p>

<p>
  <FaMapMarkerAlt className="contact-icon" />
  Tamil Nadu, India
</p>

  <button>Hire Me</button>
</section>
<footer className="footer">
  <p>© 2026 Reshma M | All Rights Reserved</p>
</footer>
    </>
  );
}

export default App;