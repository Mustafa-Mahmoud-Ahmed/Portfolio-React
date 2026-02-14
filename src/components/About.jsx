import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About({ darkMode }) {
  return (
    <section id="about" className={`about py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="about-text mb-4 mb-md-0">
            <div className="text-content">
              <p className="intro-text">
                I'm a passionate <span className="highlight">Full Stack Developer</span> dedicated to building modern, scalable web applications that deliver exceptional user experiences. With hands-on expertise in both frontend and backend development, I leverage cutting-edge technologies like React, Angular, and Node.js to create robust solutions.
              </p>
              <p className="description-text">
                My portfolio includes real-world projects ranging from e-commerce platforms to administrative dashboards, all built with a strong focus on performance, security, and clean code architecture. I work with various databases and specialize in building efficient RESTful APIs.
              </p>
              <p className="description-text">
                Currently seeking opportunities to join professional teams—both local and international—where I can continuously evolve my skills and contribute to impactful software solutions. Beyond coding, I stay engaged with the latest web development trends, contribute to open-source projects, and never stop learning.
              </p>
            </div>
          </Col>
          <Col md={6} className="about-stats">
            <div className="stats-grid">
              <div className="stat-card" data-aos="fade-left">
                <h3 className="stat-number">9+</h3>
                <p className="stat-label">Projects Completed</p>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-card" data-aos="fade-left" data-aos-delay="100">
                <h3 className="stat-number">3+</h3>
                <p className="stat-label">Years Experience</p>
                <div className="stat-glow"></div>
              </div>
              <div className="stat-card" data-aos="fade-left" data-aos-delay="200">
                <h3 className="stat-number">7+</h3>
                <p className="stat-label">Clients</p>
                <div className="stat-glow"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
