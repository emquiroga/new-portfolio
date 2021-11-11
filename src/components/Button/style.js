import styled from "styled-components";

export const StyledButton = styled.a`
display: inline-block;
margin: 0.5rem;
text-decoration: none;
text-align: center;
padding: 0.35rem 1rem;
width: 40%;
height: 20px;
font-weight: 700;
background: ${({ theme }) => theme.colors.button.background};
color: ${({ theme }) => theme.colors.button.text};
border: 1px inset ${({ theme }) => theme.colors.button.textPrimary};
box-shadow: 2px 2px 1px 0px ${({ theme }) => theme.colors.button.boxShadow};

:hover {
    color: ${({ theme }) => theme.colors.button.background};
    background: ${({ theme }) => theme.colors.button.text};
    transition: all 150ms ease-in-out;
}
`