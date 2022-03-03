import Box from "components/Box/Box";
import ProjectContainer from "components/Projects-Container/ProjectContainer";
import {
  about,
  work,
  techs,
  links,
  projectDescriptions,
} from "content";

const Main = () => {
  return (
    <main className="animate__animated animate__fadeInLeft">
      <Box title="Sobre mí" content={about} />
      <Box title="Experiencia Laboral" content={work} />
      <Box title="Tecnologías" content={techs} />
      <ProjectContainer
        title="Últimos Proyectos"
        links={links}
        content={projectDescriptions}
      />
    </main>
  );
};

export default Main;
