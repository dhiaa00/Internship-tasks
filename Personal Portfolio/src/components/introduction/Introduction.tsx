import { Link } from "react-router-dom";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Elaziz Dhia eddine</h1>
      <p>
        Enthusiastic Front-End Developer with a solid foundation in Computer
        Science. I'm actively exploring the exciting fields of Machine Learning,
        Computer Vision, and NLP.
      </p>
      <div className="introduction-links">
        <a href="/resume.pdf" download>
          Download Resume
        </a>
        <Link to="/projects">View Projects</Link>
      </div>
    </div>
  );
};

export default Introduction;
