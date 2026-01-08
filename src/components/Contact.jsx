import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import './Contact.css';

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // عرض رسالة النجاح
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // إخفاء الرسالة بعد 5 ثوان
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:Moustafa.mahnoud2024@gmail.com`;
  };

  const handlePhoneClick = () => {
    window.open(`https://wa.me/201066405617`, '_blank');
  };

  return (
    <section id="contact" className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row>
          <Col md={6} className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
              <FaEnvelope className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <p>Moustafa.mahnoud2024@gmail.com</p>
              </div>
            </div>
            <div className="info-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              <FaPhone className="info-icon" />
              <div>
                <p className="info-label">Phone</p>
                <p>+201066405617</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <p className="info-label">Location</p>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Mustafa-Mahmoud-Ahmed" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mustafa-mahmoud-7125393a2/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Mustafa97078329" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaTwitter />
              </a>
            </div>
          </Col>
          <Col md={6} className="contact-form">
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h4>Message Received!</h4>
                <p>Thank you for your message. I'll get back to you soon!</p>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here"
                  />
                </Form.Group>
                <Button type="submit" className="submit-btn">
                  Send Message
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
