import Navbar from "../navbar";
import data from "./dummy.js";
import Card from "./card";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_navbar">
        <Navbar />
      </div>
      <div className="projects_content">
        {data.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
