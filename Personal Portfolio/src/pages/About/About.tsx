import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <h1 className="title">About Me</h1>
      <div className="about-description">
        <div className="side">
          <h2 className="myName">Elaziz Dhia Eddine</h2>
          <p className="description">
            I'm a passionate Front-End Developer with a strong foundation in
            Computer Science (ESTIN Bejaia) and a keen interest in Machine
            Learning. I specialize in building web applications using React.js
            and am constantly seeking to expand my knowledge in both front-end
            development and AI.
          </p>
          <h2 className="heading">Technical Skills</h2>
          <ul className="skillsList">
            <li>
              Front-End Development: React.js, Bootstrap, Redux-toolkit,
              Tailwind CSS, HTML, CSS, SASS, JavaScript, Git, GitHub
            </li>
            <li>
              Machine Learning: Python, data cleaning, data pre-processing,
              ensemble learning
            </li>
            <li>
              Other Skills: Problem Solving, Analytical Thinking, C programming
              language
            </li>
          </ul>
        </div>
        <div className="side">
          <h2 className="heading">
            Education{" "}
            <span className="educationDetails">
              ESTIN Béjaïa (2022 - Present)
            </span>
          </h2>
          <p className="educationDetails">
            2nd year preparatory cycle student in Computer Science Engineering
          </p>
          <h2 className="heading">AI Enthusiast</h2>
          <p className="description">
            I'm fascinated by Artificial Intelligence, particularly Machine
            Learning, computer vision, and Natural Language Processing. I
            believe AI has the potential to make a positive impact on the world,
            and I'm eager to contribute to its development.
          </p>
          <h2 className="heading">Languages</h2>
          <ul className="languagesList">
            <li>Arabic (native)</li>
            <li>English</li>
            <li>French</li>
          </ul>
          <h2>IELTS Score</h2>
          <p className="ieltsScore"> 6.5</p>
        </div>
      </div>
    </div>
  );
};

export default About;
