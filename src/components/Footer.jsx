import { Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer({ darkMode }) {

  return (
    <footer className={`footer py-3 text-center ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <div className="footer-content">  
          <p className="copyright mb-0">
            &copy; Mustafa Mahmoud
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
