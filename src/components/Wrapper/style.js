import styled from "styled-components";
import { sizes } from "styles/Sizes";

const COMMONS = {
    transition: "all 150ms ease-in-out",
    noRepeat: "no-repeat",
    fullSize: "100%",
}

export const StyledWrapper = styled.div`
width: 90%;
max-width:500px;
height: 40%;
margin: 2rem auto;
padding: 1rem;
display: block;
text-align: center;
background-repeat: ${COMMONS.noRepeat};
background-size: ${COMMONS.fullSize};
:hover{
    transition: ${COMMONS.transition};
    border: 1px inset ${({ theme }) => theme.colors.textSecondary};
    box-shadow: 5px 6px 1px ${({ theme }) => theme.colors.special};
}
`
export const Title = styled.div`
cursor: pointer;
margin-bottom: .75rem;
font-size: ${sizes.fontSizes.large};
font-family: ${({ theme }) => theme.fonts.secondary};
font-weight: 700;
color: ${({ theme }) => theme.colors.textSecondary};
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
`