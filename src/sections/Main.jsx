import Box from "components/Box/Box";
import ProjectContainer from "components/Projects-Container/ProjectContainer";
import {
  about,
  work,
  studies,
  techs,
  expectations,
  links,
  projectDescriptions,
} from "content";

const Main = () => {
  return (
    <main className="animate__animated animate__fadeInLeft">
      <Box title="Sobre mí" content={about} />
      <Box title="Experiencia Laboral" content={work} />
      <Box title="Estudios" content={studies} />
      <Box title="Tecnologías" content={techs} />
      <Box title="Expectativas" content={expectations} />
      <ProjectContainer
        title="Últimos Proyectos"
        links={links}
        content={projectDescriptions}
      />
    </main>
  );
};

export default Main;
