import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import bgSharp2 from "../assets/images/bg-sharp2.png";
import { useTranslation } from "react-i18next";

import ProjectCard from "../cards/ProjectCard";
import getTranslatedProjectData from "../data/ProjectData";

function Projects() {
  const [t] = useTranslation("global");
  const { ProjectPersonal, ProjectProfessional } = getTranslatedProjectData(t);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>{t("project.title")}</h2>
            <p>{t("project.paragraph")}</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {t("project.tabs.personal")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {t("project.tabs.professional")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {ProjectPersonal.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {ProjectProfessional.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={bgSharp2}
        alt="Color Sharp 2"
      />
    </section>
  );
}

export default Projects;
