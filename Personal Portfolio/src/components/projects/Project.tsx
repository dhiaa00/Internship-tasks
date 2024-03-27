import "./project.css";

interface Project {
  img: string;
  name: string;
  description: string;
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="project">
      <img src={project.img} alt="" />
      <div className="description">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
