import { Container } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact({ darkMode }) {

  const socialLinks = [
       {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:Moustafa.mahnoud2024@gmail.com',
      color: '#ea4335',
      hoverColor: '#d33426'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/201066405617',
      color: '#25d366',
      hoverColor: '#20ba5a'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Mustafa-Mahmoud-Ahmed',
      color: '#333333',
      hoverColor: '#24292e'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/mustafa-mahmoud-7125393a2/',
      color: '#0077b5',
      hoverColor: '#006097'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/Mustafa97078329',
      color: '#1da1f2',
      hoverColor: '#1a91da'
    }
  ];

  return (
    <section id="contact" className={`contact py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title mb-4">Let's Connect</h2>
        <p className="contact-subtitle mb-5">I'm always excited to discuss new opportunities, collaborations, or just chat about tech. Reach me through</p>
        
        <div className="social-grid">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-card"
                style={{
                  '--social-color': social.color,
                  '--social-hover': social.hoverColor
                }}
              >
                <div className="social-icon-wrapper">
                  <IconComponent className="social-icon-main" />
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Contact;
