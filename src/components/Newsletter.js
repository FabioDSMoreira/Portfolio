import { Col, Row, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Newsletter({ onValidated, status, message }) {
  const [t] = useTranslation("global");

  const [email, setEmail] = useState("");
  const [statusVisible, setStatusVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    email &&
      email.indexOf("@") > -1 &&
      onValidated &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  useEffect(() => {
    let timer;
    if (status === "success" || status === "error") {
      setStatusVisible(true);
      timer = setTimeout(() => {
        setStatusVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  return (
    <Col lg={12}>
      <div className="newsletter-box">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              {t("newsletter.subscribe")}
              <br />
              {t("newsletter.updates")}
            </h3>
            {statusVisible && status === "sending" && <Alert>Sending...</Alert>}
            {statusVisible && status === "error" && (
              <Alert variant="danger">{message}</Alert>
            )}
            {statusVisible && status === "success" && (
              <Alert variant="success">{message}</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-box">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.email")}
                  required
                />
                <button type="submit">{t("newsletter.submit")}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default Newsletter;
