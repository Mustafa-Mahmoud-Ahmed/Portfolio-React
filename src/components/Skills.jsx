import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa';
import './Skills.css';

function Skills({ darkMode }) {
  const skillsData = [
    { category: 'Frontend', icon: FaReact, skills: ['React.js', 'Angular', 'Next.js', 'Bootstrap', 'Sass', 'Tailwind CSS'] },
    { category: 'Backend', icon: FaNode, skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs'] },
    { category: 'Database', icon: FaDatabase, skills: ['MongoDB', 'MySQL'] },
    { category: 'Tools & Other', icon: FaGitAlt, skills: ['Git', 'GitHub', 'PWA', 'Generative AI', 'Unit Testing'] }
  ];

  return (
    <section id="skills" className={`skills py-5 ${darkMode ? 'dark' : 'light'}`}>
      <Container>
        <h2 className="section-title mb-5">Skills</h2>
        
        <Row>
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Col md={6} lg={3} key={index} className="mb-4">
                <div className={`skill-card ${darkMode ? 'dark' : 'light'}`}>
                  <IconComponent className="skill-icon" />
                  <h4 className="skill-category mb-3">{skill.category}</h4>
                  <ul className="skill-list list-unstyled">
                    {skill.skills.map((s, idx) => (
                      <li key={idx} className="mb-2">{s}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>

      </Container>
    </section>
  );
}

export default Skills;
