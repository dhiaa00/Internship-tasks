import Project from "../../components/projects/Project";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      img: "/projects/booky.jpg",
      type: "Front-end",
      name: "Booky",
      description:
        "Web application built with ReactJS, Redux Toolkit, CSS, provides a user-friendly experience for book enthusiasts.",  
      githubL
    },
    {
      img: "/projects/hostelry.png",
      type: "Front-end",
      name: "Hostelry",
      description:
        "Web application built with ReactJS, Tailwind CSS, and ChartJS to manage hotel bookings and provide valuable insights.",
    },
    {
      img: "/projects/Dubai-safari.jpg",
      type: "Front-end",
      name: "Dubai Safari",
      description:
        "Web application for showcasing the Dubai safari agency services",
    },
    {
      img: "/projects/underwrittings.png",
      type: "Machine Learning",
      name: "Underwritings Fraud Prediction",
      description:
        "Project that attempts to predict fraud scores using a machine learning approach.",
    },
  ];
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
