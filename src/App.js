import React from 'react'

import About from 'sections/About'
import Home from 'sections/Home'
import Projects from 'sections/Projects'
import Tech from 'sections/Tech'

import { links } from 'content'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import {light, dark} from 'styles/Themes.js'

const theme = light;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyles />
                <Home />
                <About />
                <Tech />
                <Projects links={links}/>
        </ThemeProvider>
    )
}

export default App
