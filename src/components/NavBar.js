import { useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import iconLogo from "../assets/images/icon-logo.svg";
import iconLinkedIn from "../assets/images/icon-linkedin.svg";
import iconGithub from "../assets/images/icon-github.svg";

import lngUK from "../assets/images/lng-uk.svg";
import lngFR from "../assets/images/lng-fr.svg";

function NavBar() {
  const [t, i18n] = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={iconLogo} alt="logo" className="logo-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {t("navbar.home")}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {t("navbar.skills")}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {t("navbar.projects")}
            </Nav.Link>
          </Nav>
          <Dropdown className="navbar-dropdown">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="navbar-dropdown-toggle"
            >
              <img
                src={currentLanguage === "en" ? lngUK : lngFR}
                alt={currentLanguage}
              />{" "}
              {currentLanguage.toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu className="navbar-dropdown-menu">
              <Dropdown.Item
                as="div"
                className="dropdown-item"
                onClick={() => handleChangeLanguage("en")}
              >
                <img src={lngUK} alt="EN" /> <span>EN</span>
              </Dropdown.Item>
              <Dropdown.Item
                as="div"
                className="dropdown-item"
                onClick={() => handleChangeLanguage("fr")}
              >
                <img src={lngFR} alt="FR" /> <span>FR</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/f%C3%A1biomoreiradev/"
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
            <a href="#connect">
              <button onClick={() => console.log("connect")}>
                <span>{t("navbar.contact")}</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
