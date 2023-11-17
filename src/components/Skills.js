import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

import bgSharp from "../assets/images/bg-sharp.png";

import SkillCard from "../cards/SkillCard";
import { SkillsList } from "../data/SkillsData";

function Skills() {
  const [t] = useTranslation("global");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>{t("skill.title")}</h2>
              <p>{t("skill.paragraph")}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {SkillsList.map((skill, index) => {
                  return <SkillCard key={index} {...skill} />;
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={bgSharp} alt="Color Sharp" />
    </section>
  );
}

export default Skills;
