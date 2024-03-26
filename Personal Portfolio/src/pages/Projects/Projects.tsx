import Project from "../../components/projects/Project";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      img: "/projects/booky.jpg",
      name: "Booky",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,",
    },
    {
      img: "/projects/hostelry.png",
      name: "Hostelry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,",
    },
    {
      img: "/projects/Dubai-safari.jpg",
      name: "Dubai Safari",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,",
    },
    {
      img: "/projects/Dubai-safari.jpg",
      name: "Dubai Safari",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,",
    },
    {
      img: "/projects/Dubai-safari.jpg",
      name: "Dubai Safari",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,",
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
