import styled from "styled-components";
import { sizes } from "styles/Sizes";

const COMMONS = {
    transition: "all 150ms ease-in-out",

}

export const StyledWrapper = styled.div`
width: 80%;
max-width:500px;
height: 30%;
max-height: 250px;
margin: 2rem auto;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
:hover{
    transition: ${COMMONS.transition};
    border: 1px inset ${({ theme }) => theme.colors.textSecondary};
    box-shadow: 5px 6px 1px ${({ theme }) => theme.colors.special};
}
`
export const Title = styled.div`
cursor: pointer;
margin-bottom: .75rem;
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: 700;
color: ${({ theme }) => theme.colors.textSecondary};
@media (min-width: ${sizes.breakPoints.tablet}){
    font-size: ${sizes.fontSizes.large};
}
:hover {
    color: ${({ theme }) => theme.colors.special};
    transform: scale(1.035);
    transition: ${COMMONS.transition};
}
`
export const Description = styled.div`
margin: auto;
font-size: ${sizes.fontSizes.small};
text-align: center;
color: ${({ theme }) => theme.colors.textPrimary};
cursor: default;
@media (min-width: ${sizes.breakPoints.tablet}){
    font-size: ${sizes.fontSizes.medium};

}
.button-container {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.projects-container {
 width: 80%;
 padding: 0;
 margin: auto;
 display: flex;
 flex-direction: column;
}
.projects-container:hover > div div {
    filter: blur(5px) opacity(60%);
    transition: all 0.2s ease;
  }

.projects-container div:hover div {
    filter: blur(0px) opacity(100%);
    transition: all 0.2s ease;
}
`