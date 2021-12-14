import ModalPortal from "components/Modal/Modal";
import Wrapper from "components/Wrapper/Wrapper";

import { Container, ProjectsWrapper } from "./style";
import { StyledTitle } from "components/Box/style";

import { useBox } from "hooks/useBox";
import { useModal } from "hooks/useModal";

const ProjectContainer = ({ title, links, content }) => {
  const { modal, live, repo, toggleModal } = useModal(links);
  const { isOpen, toggleBox } = useBox();

  return (
    <Container>
      <StyledTitle onClick={toggleBox}>
        <span>&lt;</span>
        {title}
        <span>/&gt;</span>
      </StyledTitle>
      {isOpen && (
        <ProjectsWrapper className="animate__animated animate__fadeInUp">
          <Wrapper
            title={content.title1}
            id="1"
            description={content.pro1}
            openModal={toggleModal}
          />
          <Wrapper
            title={content.title2}
            id="2"
            description={content.pro2}
            openModal={toggleModal}
          />
          <Wrapper
            title={content.title3}
            id="3"
            description={content.pro3}
            openModal={toggleModal}
          />
          {modal && (
            <ModalPortal live={live} repo={repo} onClose={toggleModal} />
          )}
        </ProjectsWrapper>
      )}
    </Container>
  );
};

export default ProjectContainer;
