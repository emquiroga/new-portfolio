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
overflow: hidden;
border: 1px inset ${({ theme }) => theme.colors.textSecondary};
transition: all 0.4s ease-in-out;
:hover{
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 ${({ theme }) => theme.colors.special};
}
`
export const StyledTitle = styled.h3`
cursor: pointer;
width: 100%;
max-width: 400px;
margin: 0 auto 2rem auto;
`