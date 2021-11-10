import { StyledWrapper, Title, Description } from "./style";

const Wrapper = ({ title, description, openModal, id }) => {
  return (
    <StyledWrapper>
      <div>
        <Title id={id} onClick={openModal}>
          {title}
        </Title>
        <Description>{description}</Description>
      </div>
    </StyledWrapper>
  );
};

export default Wrapper;
