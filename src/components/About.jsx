import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About({ darkMode }) {
  return (
    <section id="about" className={`about py-5 ${darkMode ? 'dark' : 'light'}`} dir="rtl">
      <Container>
        <h2 className="section-title mb-4">انا مين</h2>
        <Row className="align-items-center">
          <Col md={6} className="about-text mb-4 mb-md-0">
            <p className="mb-3">أنا Full Stack Developer شغوف بتطوير تطبيقات ويب حديثة، قابلة للتوسع، وتقدم تجربة مستخدم عالية الجودة. أمتلك خبرة عملية في تطوير الواجهات الأمامية والخلفية باستخدام تقنيات حديثة مثل React، Angular، Node.js، بالإضافة إلى العمل مع قواعد البيانات المختلفة وبناء RESTful APIs.
            </p>
            <p className="mb-3">
             عملت على تنفيذ مشاريع حقيقية متكاملة شملت أنظمة تجارة إلكترونية ولوحات تحكم إدارية، مع اهتمام كبير بالأداء، الأمان، وجودة الكود. كما أمتلك خلفية قوية في الدعم الفني وحل المشكلات التقنية، مما ساعدني على فهم احتياجات المستخدمين والتعامل مع التحديات التقنية بكفاءة.
            </p>
            <p className="mb-3">
أسعى حاليًا للحصول على فرصة عمل محلية أو دولية داخل فريق تقني احترافي، أستطيع من خلالها تطوير مهاراتي باستمرار والمساهمة في بناء حلول برمجية مؤثرة. خارج إطار العمل، أحرص على استثمار وقتي في متابعة أحدث تطورات الويب، قراءة المقالات التقنية، تعلم تقنيات جديدة، والمشاركة في مشاريع مفتوحة المصدر            </p>
          </Col>
          <Col md={6} className="about-stats">
            <div className="stat-card mb-3">
              <h3>9+</h3>
              <p>المشاريع المنجزة</p>
            </div>
            <div className="stat-card mb-3">
              <h3>3+</h3>
              <p>سنوات الخبرة</p>
            </div>
            <div className="stat-card mb-3">
              <h3>7+</h3>
              <p>العملاء الراضين</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
