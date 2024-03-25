import { Link } from "react-router-dom";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Elaziz Dhia eddine</h1>
      <p>
        I'm a passionate Front-End Developer with a strong foundation in
        Computer Science (ESTIN Bejaia). I specialize in building web
        applications using React.js while constantly seeking to expand my
        knowledge. I'm currently learning in the field of Artificial
        Intelligence, particularly interested in ML, computer vision, NLP. I'm
        interested in AI's potential to make a positive impact on the world.
      </p>
      <div className="introduction-links">
        <a href="/resume.pdf" download>
          Resume/CV
        </a>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Introduction;
