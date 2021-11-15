import React from "react";
import { StyledFooter, StyledFooterLink, StyledFooterText } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>
        Icons from
        <StyledFooterLink
          target="_blank"
          href="https://fontawesome.com/"
          rel="noreferrer"
        >
          fontawesome
        </StyledFooterLink>
        | Animations by{" "}
        <StyledFooterLink
          target="_blank"
          href="https://animate.style/"
          rel="noreferrer"
        >
          animate.css
        </StyledFooterLink>
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
