import "./card.scss";
const Card = ({ project }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={project.img} alt="project" height={200} width={300} />
      </div>
      <div className="card_description">
        <div className="card_description_title">{project.title}</div>
        <div className="card_description_content">{project.description}</div>
      </div>
    </div>
  );
};

export default Card;
