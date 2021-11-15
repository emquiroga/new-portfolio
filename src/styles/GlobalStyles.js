import { createGlobalStyle } from "styled-components";
import { sizes } from './Sizes.js'


export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: initial;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
    cursor: pointer;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px${({ theme }) => theme.colors.textPrimary};
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.textPrimary};

}
body {
  align-items: center;
  background-color: ${({ theme }) => theme.colors.body};
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  display: flex;
  flex-flow: column wrap;
  overflow-x: hidden;
  padding: 0;
  position: relative;
  width: 100vw;
}
section {
  padding:  0;
  width: 100%;
}
section:nth-of-type(1){
  margin: 10vh 0 20vh 0;
}
main {
  padding: 0;
  width: 100%;
}
h1,
h2,
h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 0;
    margin: 1.25rem 0;
    text-align: center;
}
h1 {
  font-size: ${sizes.fontSizes.xlarge};
}
ul{
  margin: auto;
  padding: 0;
  width: 80vw;
  max-width: 250px;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
li {
  margin: 0;
  padding: 0;
}
p,
li,
div {
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${sizes.fontSizes.small};
  padding: 0;
}
p {
  margin: 1rem auto;
  text-align: justify
}
figure {
  width: 100%;
  max-height: 500px;
  margin: 0;
  display: block;
  display: flex;
  justify-content: center;
}
img {
  width: 75%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  margin: 0;
  padding: 0;
}
a {
  width: 3rem;
  display: block;
  overflow: hidden;
  font-size: ${sizes.fontSizes.small};
}
svg,
path {
  pointer-events: all;
}
path{
  fill: ${({ theme }) => theme.colors.icons.background};
  :hover {
    fill: ${({ theme }) => theme.colors.icons.hover};
    transition: all 150ms ease-in-out;
  }
}
span {
  color: ${({ theme }) => theme.colors.special};
}
`