import { createGlobalStyle } from "styled-components";
import { sizes } from './Sizes.js'

export const DisplayCongif = createGlobalStyle`
//Tablet 768px
@media (min-width: ${sizes.breakPoints.tablet}) {
  body {
    line-height: 1.2;
  }
  section {
    height: 100vh;
    margin: 10vh 0 0 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  h2 {
    font-size: ${sizes.fontSizes.xlarge};
  }
  p, div {
    font-size: ${sizes.fontSizes.medium};
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
    padding-top: 5rem;
  }
}
//DESKTOP 1024px
@media (min-width: ${sizes.breakPoints.large}) {
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    grid-template-rows: masonry;
    grid-auto-flow: row dense;
    justify-content: center;
    align-content: center;
  }
  figure {
    width: 50%;
    height: 50%;
    margin: auto;
  }
 img {
   max-width: 750px;
   max-height: 750px;
 }
}
//Desktop 1440px
@media (min-width: ${sizes.breakPoints.xlarge}) {
  div{
   line-height: 1.6;
 }
}
`