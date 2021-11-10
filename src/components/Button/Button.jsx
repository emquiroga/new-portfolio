import { StyledButton } from "./style";

const Button = ({ text, linkTo }) => {
  return (
    <StyledButton target="_blank" rel="noreferrer" href={linkTo}>
      {text}
    </StyledButton>
  );
};

export default Button;
