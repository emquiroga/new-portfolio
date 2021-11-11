import { createGlobalStyle } from "styled-components";
import { sizes } from './Sizes.js'


export const DisplayCongif = createGlobalStyle`
//Tablet
@media (min-width: ${sizes.breakPoints.tablet}) {
  body {
    line-height: 1.2;
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
//TALET
//DESKTOP 1024px
@media (min-width: ${sizes.breakPoints.large}) {
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
//DESKTOP
//Desktop 1440px
@media (min-width: ${sizes.breakPoints.xlarge}) {
  body {
    line-height: 1.5;
  }
}






//Classes
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