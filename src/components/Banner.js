import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download, ArrowReturnRight } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

import headerImage from "../assets/images/cosmonaut.svg";

function Banner() {
  const [t] = useTranslation("global");

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [`${t("banner.job")}`];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">{t("banner.portfolio")}</span>
            <h1>
              {t("banner.welcome")}
              <br />
              <ArrowReturnRight size={50} />
              <span className="wrap"> {text}</span>
            </h1>
            <p>{t("banner.about.me")}</p>
            <p>{t("banner.about.goal")}</p>
            <a
              href="../assets/downloads/CV.zip"
              download
              className="banner-btn-download"
            >
              <button onClick={() => console.log("download")}>
                <span>
                  {t("banner.download")} <Download size={30} />
                </span>
              </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <img src={headerImage} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
