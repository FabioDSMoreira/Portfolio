import { Container, Row, Col } from "react-bootstrap";
import { CCircle } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

import MailchimpForm from "./MailchimpForm";

import iconLogo from "../assets/images/icon-logo.svg";
import iconLinkedIn from "../assets/images/icon-linkedin.svg";
import iconGithub from "../assets/images/icon-github.svg";

function Footer() {
  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={iconLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/f%C3%A1bio-moreira-476512167/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconLinkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/iFamos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconGithub} alt="Github" />
              </a>
            </div>
            <p>
              <CCircle /> {t("footer.copyright")}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
