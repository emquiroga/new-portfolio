import styled from "styled-components";
import { sizes } from "styles/Sizes";

export const StyledButton = styled.a`
width: 40%;
height: 12.5%;
max-height: 36px;
padding: 0.35rem 1rem;
margin: 0.5rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
font-weight: 700;
font-size: ${sizes.fontSizes.small};
background: ${({ theme }) => theme.colors.button.background};
color: ${({ theme }) => theme.colors.button.text};
border: 1px inset ${({ theme }) => theme.colors.button.textPrimary};
box-shadow: 2px 2px 1px 0px ${({ theme }) => theme.colors.button.boxShadow};
@media (min-width: ${sizes.breakPoints.tablet}) {
    font-size: ${sizes.fontSizes.medium};
}

:hover {
    color: ${({ theme }) => theme.colors.button.background};
    background: ${({ theme }) => theme.colors.button.text};
    transition: all 150ms ease-in-out;
}
`