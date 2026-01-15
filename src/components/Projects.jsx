import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

function Projects({ darkMode }) {
  const projectsData = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768406367/Screenshot_2026-01-08_175211_dqsvyt.png',
      title: 'Mobile Masr E-Commerce Clone',
      description: 'Full-scale e-commerce platform with AI-powered chat, intelligent search, and product comparison. Features customer website (React), admin dashboard (Angular), and robust backend.',
      tech: ['React', 'Angular', 'Node.js', 'MongoDB', 'OpenAI API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Mobile-Masr',
      link: 'https://mobile-masr.vercel.app/'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768448121/722f60aa-4ab3-46f2-8e83-d8610d81d2b9.png',
      title: 'E-commerce Black Friday Website',
      description: ' Developed a fully functional e-commerce website showcasing multiple product categories and details. Implemented responsive design and interactive UI components using Bootstrap.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Black-Friday',
      link: 'https://www.itiqena.com/blackfriday/'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768448235/logo_z5xj5z.png',
      title: 'Medical System',
      description: 'Healthcare management system that simplified administrative and patient-related processes with dynamic interfaces connected to backend APIs.',
      tech: ['TypeScript', 'Angular', 'REST API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Medica',
      link: 'https://example.com'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768448330/img_jgaky0.png',
      title: 'Meeting Management System',
      description: 'Web-based system for organizing and managing meetings efficiently with role-based access and scheduling features.',
      tech: ['React', 'JavaScript' , 'REST API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Meeting-Management-System',
      link: 'https://example.com'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768448397/3640a6ec-b074-4782-85cd-7e967c47d085.png',
      title: 'Movies website',
      description: 'The app fetches movie data from an external API, displays all available movies, and provides users with a smooth and interactive experience.',
      tech: ['React', 'Bootstrap', 'JavaScript', 'REST API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Movies-Website',
      link: 'https://www.itiqena.com/movies-website/'
    },
     {
      id: 6,
      image: 'https://res.cloudinary.com/duce05x5c/image/upload/v1768448480/2406dff1-ec14-44f1-a7b8-d5eca3de2348.png',
      title: 'Riot Games',
      description: 'Angular-based storefront that lists products, shows product details, and supports user sign-up/sign-in with protected routes.',
      tech: ['Angular', 'Bootstrap', 'TypeScript', 'REST API'],
      github: 'https://github.com/Mustafa-Mahmoud-Ahmed/Movies-Website',
      link: 'https://www.itiqena.com/movies-website/'
    },

  ];

  return (
    <section id="projects" className={`projects py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title mb-5">Projects</h2>
        <Row className="projects-grid">
          {projectsData.map((project) => (
            <Col md={4} lg={4} key={project.id} className="mb-4">
              <Card className={`project-card ${darkMode ? 'dark' : 'light'}`}>
                <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">{project.description}</Card.Text>
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-badge" style={{
                        backgroundColor: 
                          tech === 'HTML5' || tech === 'HTML' ? '#e34c26' :
                          tech === 'CSS3' || tech === 'CSS' ? '#264de4' :
                          tech === 'JavaScript' ? '#f0db4f' :
                          tech === 'React' ? '#61dafb' :
                          tech === 'Tailwind CSS' ? '#06b6d4' :
                          tech === 'Angular' ? '#dd0031' :
                          tech === 'Node.js' ? '#68a063' :
                          tech === 'MongoDB' ? '#47a248' :
                          tech === 'TypeScript' ? '#3178c6' :
                          tech === 'Bootstrap' ? '#7952b3' :
                          tech === 'REST API' ? '#009688' :
                          tech === 'OpenAI API' ? '#10a37f' :
                          '#667eea',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub /> GitHub
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
