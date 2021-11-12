import { createGlobalStyle } from "styled-components";
import { sizes } from './Sizes.js'

export const DisplayCongif = createGlobalStyle`
.projects-container {
 width: 80%;
 height: 80%;
 max-height: 80vh;
 padding: 0;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
}
//Small size
@media (min-width: ${sizes.breakPoints.small}) {
  section {
    height: auto;
    min-height: 500px;
  }
  ul {
    width: 60%;
    flex-flow: row wrap;
    justify-content: center;
  }
}
//Tablet sizing
@media (min-width: ${sizes.breakPoints.tablet}) {
  body {
    line-height: 1.2;
  }
  section {
    height: 100vh;
  }
  h2 {
    font-size: ${sizes.fontSizes.xlarge};
  }
  p {
    font-size: ${sizes.fontSizes.medium};
  }
  .homeSection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);

  }
  figure {
    grid-column: 1;
    grid-row: -7/-3;
    padding: 0;
    margin-top: 10%;
  }
  img {
    width: auto;
  }
  h1 {
    grid-column: 2;
    grid-row: 3;
    font-size: ${sizes.fontSizes.xXL};
  }
  h3 {
    font-size: ${sizes.fontSizes.large};
  }
  .homeSub {
    grid-column: 1;
    grid-row: 5;
    padding: 0 20%;
  }
  .homeContact {
    grid-column: 2;
    grid-row: 5;
  }
  .homeList {
    grid-column: 2;
    grid-row: 5;
    padding-top: 3rem;
  }
}
//TABLET
//DESKTOP 1024px
@media (min-width: ${sizes.breakPoints.large}) {
  figure {
    width: 50%;
    height: 50%;
    margin: auto;
  }
 img {
   max-width: 750px;
   max-height: 750px;
 } 
.aboutSection,
.techSection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2rem;
  align-items: center;
}
.aboutSection h2 {
  grid-column: 1/3;
  grid-row: 1;
}
.aboutDescription{
  grid-column: 1/3;
}
.aboutWork {
  grid-column: 1;
  grid-row: 3/6;
}
.aboutStudies {
  grid-column: 2;
  grid-row: 3/6;
}
}
//Desktop 1440px
@media (min-width: ${sizes.breakPoints.xlarge}) {
  body {
    line-height: 1.5;
  }
  .homeList {
    padding-top: 5rem;
  }
}
//DESKTOP
`