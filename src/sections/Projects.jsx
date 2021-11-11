import { useState } from "react";
import ModalPortal from "components/Modal/Modal";
import Wrapper from "components/Wrapper/Wrapper";

const Projects = ({ links }) => {
  const [modal, setModal] = useState(false);
  const [live, setLive] = useState("");
  const [repo, setRepo] = useState("");

  const getLinks = (event) => {
    let id = event.target.id;
    let myLinks = {
      repo: "",
      live: "",
    };
    if (id === "1") {
      myLinks = {
        repo: links.project1.repo,
        live: links.project1.live,
      };
    }
    if (id === "2") {
      myLinks = {
        repo: links.project2.repo,
        live: links.project2.live,
      };
    }
    if (id === "3") {
      myLinks = {
        repo: links.project3.repo,
        live: links.project3.live,
      };
    }
    return myLinks;
  };

  const toggleModal = (id) => {
    setModal(!modal);
    const links = getLinks(id);
    setRepo(links.repo);
    setLive(links.live);
  };

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
          description=" ↳ React, Sass, react-router, axios, etc. App desarrollada para el
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
