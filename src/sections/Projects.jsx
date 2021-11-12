import ModalPortal from "components/Modal/Modal";
import Wrapper from "components/Wrapper/Wrapper";
import { useModal } from "hooks/useModal";

const Projects = ({ links }) => {
  const { modal, live, repo, toggleModal } = useModal(links);
  return (
    <section className="projectSection">
      <h2>
        <span>&lt;</span>Últimos proyectos<span>/&gt;</span>
      </h2>
      <div className="projects-container">
        <Wrapper
          title="GifHub - Giphy SDK"
          id="1"
          description=" ↳ React, emotion (styled-components), wouter, formik, etc. App de
        búsqueda de gifs con una API de Giphy."
          openModal={toggleModal}
        />
        <Wrapper
          title="SuperHero API"
          id="2"
          description=" ↳ React, Sass, react-router, formik, axios, etc. App desarrollada para el
          challenge de React.js de Alkemy Labs."
          openModal={toggleModal}
        />
        <Wrapper
          title="Calculadora de Pagos"
          id="3"
          description=" ↳ React, Redux, Firebase, Materialize. App desarrollada como parte
          del curso React desde Cero en Udemy."
          openModal={toggleModal}
        />
      </div>
      {modal && <ModalPortal live={live} repo={repo} onClose={toggleModal} />}
    </section>
  );
};

export default Projects;
