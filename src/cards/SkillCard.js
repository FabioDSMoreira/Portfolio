import { Col } from "react-bootstrap";

function SkillCard({ stack, imgUrl }) {
  return (
    <Col>
      <div className="item">
        <img src={imgUrl} alt={stack} />
        <h5>{stack}</h5>
      </div>
    </Col>
  );
}

export default SkillCard;
