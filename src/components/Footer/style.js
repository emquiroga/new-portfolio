import styled from "styled-components";
import { sizes } from "styles/Sizes";

export const StyledFooter = styled.footer`
width: 100vw;
height: 2rem;
margin: 0;
padding: 0;
overflow: hidden;
background-color: ${props => props.theme.colors.textSecondary};
font-family: ${props => props.theme.fonts.primary};
display: flex;
flex-flow: row wrap;
align-items: center;
@media  (min-width: ${sizes.breakPoints.large}) {
    height: 3rem;
    margin-top: 3rem;
}
`
export const StyledFooterText = styled.p`
font-weight: 700;
margin: 0;
padding: 0;
width: 100%;
text-align: justify;
color: ${props => props.theme.colors.bg1};
display: flex;
flex-flow: row wrap;
justify-content: center;
@media  (min-width: ${sizes.breakPoints.large}) {
    font-size: ${sizes.fontSizes.medium};
}
`
export const StyledFooterLink = styled.a`
text-decoration: none;
color: ${props => props.theme.colors.body};
display: block;
margin: 0 4px;
padding: 0;
width: auto;
height: auto;
:hover {
    color: ${props => props.theme.colors.special};
    transition: all 150ms ease-in-out;
}
@media (min-width: ${sizes.breakPoints.tablet}) {
    margin: 0 6px;
    font-size: ${sizes.fontSizes.medium}
}
`