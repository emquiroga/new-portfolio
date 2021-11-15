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
:hover{
    transition: all 0.6s ease;
    transform: translate(-.25rem, -1rem);
    border: 1px inset ${({ theme }) => theme.colors.textSecondary};
    box-shadow: 5px 6px 1px ${({ theme }) => theme.colors.special};
}
`
export const ProjectsWrapper = styled.div`
 width: 80%;
 padding: 0;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
`
