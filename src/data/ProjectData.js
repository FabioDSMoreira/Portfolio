import projPortfolio from "../assets/images/proj-portfolio.png";
import projPearl from "../assets/images/proj-pearl.jpg";
import projPlaySmart from "../assets/images/proj-playsmart.png";
import projEstateAgency from "../assets/images/proj-realestateagency.png";

function getTranslatedProjectData(t) {
  return {
    ProjectPersonal: [
      {
        title: t("project.projects.personal.portfolio.title"),
        description: t("project.projects.personal.portfolio.description"),
        stack: t("ReactJS"),
        status: t("project.projects.personal.portfolio.status"),
        imgUrl: projPortfolio,
      },
      {
        title: t("project.projects.personal.pearl.title"),
        description: t("project.projects.personal.pearl.description"),
        stack: t("JavaScript, Node.js, Express.js, MongoDB"),
        status: t("project.projects.personal.pearl.status"),
        imgUrl: projPearl,
      },
      {
        title: t("project.projects.personal.playsmart.title"),
        description: t("project.projects.personal.playsmart.description"),
        stack: t("ReactJS"),
        status: t("project.projects.personal.playsmart.status"),
        imgUrl: projPlaySmart,
      },
    ],
    ProjectProfessional: [
      {
        title: t("project.projects.professional.realestateagency.title"),
        description: t(
          "project.projects.professional.realestateagency.description"
        ),
        stack: t("ReactJS"),
        status: t("project.projects.professional.realestateagency.status"),
        imgUrl: projEstateAgency,
      },
    ],
  };
}

export default getTranslatedProjectData;
