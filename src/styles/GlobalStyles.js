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
body {
  position: relative;
  background-color: ${({ theme }) => theme.colors.body};
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: ${({ theme }) => theme.fonts.primary};
}
section {
    width: 100vw;
    height: 100vh;
    padding: 1rem 0 0 0;
    margin: 0;
}
h1,
h2,
h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 0;
    margin: 1.25rem 0;
    text-align: center;
    text-shadow: 1px 1px 0px ${({ theme }) => theme.fonts.primary};
}
h1 {
    font-size: ${sizes.fontSizes.xlarge};
}
ul{
  margin: auto;
  padding: 0;
  width: 80%;
  list-style: none;
  display: flex;
  flex-flow: row;
  justify-content: center;
}
li {
  margin: 0.5rem 1rem;
  padding: 0;
}
p,
li {
  color: ${({ theme }) => theme.fonts.primary};
  font-size: ${sizes.fontSizes.medium};
  padding: 0;
}
p {
  width: 80%;
  padding: 0;
  margin: auto;
  text-align: justify
}
figure {
  width: 100%;
  height: auto;
  max-height: 500px;
  margin: 0;
  padding: 10% 0 0 0;
  display: block;
  display: flex;
  justify-content: center;
}
img {
  width: 75%;
  max-width: 500px;
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
.button-container {
  width: 100%;
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