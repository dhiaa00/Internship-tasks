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
      githubLink: "https://github.com/dhiaa00/book-store",
      liveWebsite: "https://book-store-chi-one.vercel.app/",
    },
    {
      img: "/projects/hostelry.png",
      type: "Front-end",
      name: "Hostelry",
      description:
        "Web application built with ReactJS, Tailwind CSS, and ChartJS to manage hotel bookings and provide valuable insights.",
      githubLink: "https://github.com/dhiaa00/Hotel-Management",
      liveWebsite: "https://hotel-management-jade-tau.vercel.app/",
    },
    {
      img: "/projects/Dubai-safari.jpg",
      type: "Front-end",
      name: "Dubai Safari",
      description:
        "Web application for showcasing the Dubai safari agency services",
      githubLink: "https://github.com/dhiaa00/Dubai-Desert-Safari",
      liveWebsite: "https://dubai-desert-safari-tau.vercel.app/",
    },
    {
      img: "/projects/underwrittings.png",
      type: "Machine Learning",
      name: "Underwritings Fraud Prediction",
      description:
        "Project that attempts to predict fraud scores using a machine learning approach.",
      githubLink: "https://github.com/dhiaa00/Underwritings-Fraud-Prediction",
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
