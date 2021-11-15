import { useBox } from "hooks/useBox";
import { StyledBox, StyledTitle } from "./style";

const Box = ({ title, content }) => {
  const { isOpen, toggleBox } = useBox();
  return (
    <StyledBox>
      <StyledTitle onClick={toggleBox}>
        <span>&lt;</span>
        {title}
        <span>/&gt;</span>
      </StyledTitle>
      {isOpen && (
        <div className="animate__animated animate__fadeInUp">{content}</div>
      )}
    </StyledBox>
  );
};

export default Box;
