import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <BSNavbar expand="lg" className={`navbar-custom py-3 shadow-sm ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <BSNavbar.Brand href="#home" className="brand-name me-4">
          <span className="brand-text">Mustafa Mahmoud</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about" className="nav-link mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-link mx-2">
              Experience
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link mx-2">
              Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link mx-2">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link mx-2">
              Contact
            </Nav.Link>
            <Nav.Link href="/Mustafa Mahmoud CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-link mx-2">
              Resume
            </Nav.Link>
            <Nav.Link href="https://github.com/Mustafa-Mahmoud-Ahmed" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mustafa-mahmoud-7125393a2/" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
              <FaLinkedin />
            </Nav.Link>
            <button className="theme-toggle ms-3" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
