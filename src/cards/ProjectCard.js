import { Col } from "react-bootstrap";

function ProjectCard({ title, description, stack, status, imgUrl }) {
  return (
    <Col className="project-card" sm={6} md={4}>
      <div className="proj-img-box">
        <img src={imgUrl} alt={title} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <p>{description}</p>
          <span>{stack}</span>
          <span>{status}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
