import styled from "styled-components";

export const Container = styled.div`
width: 70%;
max-width: 500px;
height: auto;
padding: 1.5rem;
margin: 1rem auto;
position: relative;
line-height: 1.5;
display: flex;
flex-direction: column;
text-align: justify;
align-items: flex-start;
overflow: hidden;
border: 1px inset ${({ theme }) => theme.colors.textSecondary};
transition: all 0.4s ease-in-out;
:hover{
    transform: translate(4px, -4px);
    box-shadow: -8px 8px 0 ${({ theme }) => theme.colors.special};
}
`
export const ProjectsWrapper = styled.div`
 width: 80%;
 padding: 0;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
`
