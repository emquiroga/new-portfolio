import styled from "styled-components";

export const TogglerWrapper = styled.div`
width: 3.5rem;
position: absolute;
top: 2.5%;
right: 5%;
background-color: ${({ theme }) => theme.colors.textPrimary};
border-radius: 2rem;
`
export const ThemeInput = styled.input`
position: absolute;
opacity: 0;
:checked + label div {
    transform: translateX(1.75rem);
}
`
export const ThemeLabel = styled.label`
position: relative;
display: flex;
flex-flow: row;
align-items: center;
justify-content: space-between;
cursor: pointer;
`
export const ThemeSvg = styled.svg`
margin: 0;
padding: 0.25rem;
width: 1.75rem;
path {
    fill: ${({ theme }) => theme.colors.special};
    }
`
export const ThemeBall = styled.div`
width: 1.75rem;
height: 1.75rem;
position: absolute;
left: 0;
border: 1px solid ${({ theme }) => theme.colors.bg1};
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.body};
transform: translateX(0px);
transition: transform 0.2s linear;
`