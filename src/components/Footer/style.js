import styled from "styled-components";
import { sizes } from "styles/Sizes";

export const StyledFooter = styled.footer`
width: 100%;
height: auto;
margin: 0;
padding: 0;
overflow: hidden;
background-color: ${props => props.theme.colors.textSecondary};
font-family: ${props => props.theme.fonts.primary};
position: absolute;
bottom: 0;
@media  (min-width: ${sizes.breakPoints.large}) {
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
flex-flow: row;
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