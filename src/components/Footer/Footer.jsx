import React from "react";
import { StyledFooter, StyledFooterLink, StyledFooterText } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>
        © Icons from
        <StyledFooterLink
          target="_blank"
          href="https://fontawesome.com/"
          rel="noreferrer"
        >
          fontawesome
        </StyledFooterLink>
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
