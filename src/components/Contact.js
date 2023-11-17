import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import emailjs from "@emailjs/browser";

import contactImg from "../assets/images/contact-img.svg";

function Contact() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    setButtonText(t("contact.button.send"));
  }, [t, i18n.language]);

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t("contact.button.send"));
  const [status, setStatus] = useState({});
  const [statusVisible, setStatusVisible] = useState(true);

  const onFormUpdate = (category, value) => {
    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      [category]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendingButtonText = t("contact.button.sending");

    setButtonText(sendingButtonText);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText(t("contact.button.send"));
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: t("contact.sent.success") });
        },
        (error) => {
          console.log(error.text);
          setButtonText(t("contact.button.send"));
          setStatus({ success: false, message: t("contact.sent.error") });
        }
      );
  };

  useEffect(() => {
    let timer;
    if (status.message) {
      setStatusVisible(true);
      timer = setTimeout(() => {
        setStatusVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status.message]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>{t("contact.title")}</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    name="firstName"
                    placeholder={t("contact.firstName")}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    name="lastName"
                    placeholder={t("contact.lastName")}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    name="email"
                    placeholder={t("contact.email")}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    name="phone"
                    placeholder={t("contact.phone")}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    value={formDetails.message}
                    name="message"
                    placeholder={t("contact.message")}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                </Col>
                <div className="button-alert">
                  <Col>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  <Col>
                    {statusVisible && status.message && (
                      <Col>
                        <p
                          className={`status ${
                            status.success ? "success" : "error"
                          }`}
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Col>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
