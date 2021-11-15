import styled from "styled-components";

export const StyledBox = styled.div`
width: 70%;
max-width: 500px;
height: auto;
padding: 1.5rem;
margin: 1rem auto;
position: relative;
line-height: 1.5;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
:hover{
    transition: all 0.6s ease;
    transform: translate(-.25rem, -1rem);
    border: 1px inset ${({ theme }) => theme.colors.textSecondary};
    box-shadow: 5px 6px 1px ${({ theme }) => theme.colors.special};
}
`
export const StyledTitle = styled.h3`
cursor: pointer;
width: 100%;
max-width: 400px;
margin: 0 auto 2rem auto;
`