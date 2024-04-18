import "./project.css";
import linkIcon from "/images/link-icon.png";
import liveIcon from "/images/live-streaming.png";

interface Project {
  img: string;
  name: string;
  description: string;
  githubLink: string;
  liveWebsite?: string;
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="project">
      <img src={project.img} alt="" />
      <div className="description">
        <h2>
          {project.name}
          <div className="project-links">
            <a target="_blank" href={project.githubLink}>
              <img className="link-icon" src={linkIcon} alt="link icon" />
            </a>

            {project.liveWebsite && (
              <a target="_blank" href={project.liveWebsite}>
                <img className="link-icon" src={liveIcon} alt="live icon" />
              </a>
            )}
          </div>
        </h2>

        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
