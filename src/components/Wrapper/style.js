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
    font-size: ${sizes.fontSizes.medium};
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
.projects-container:hover > div div {
    filter: blur(5px) opacity(60%);
    transition: all 0.2s ease;
  }

.projects-container div:hover div {
    filter: blur(0px) opacity(100%);
    transition: all 0.2s ease;
}
`