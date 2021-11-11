import React, { useState } from 'react'

import About from 'sections/About'
import Home from 'sections/Home'
import Projects from 'sections/Projects'
import Tech from 'sections/Tech'
import ThemeToggler from 'components/Theme-Toggler/Theme-Toggler'

import { links } from 'content'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import { DisplayCongif } from 'styles/DisplayConfig'
import {light, dark} from 'styles/Themes.js'


const App = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyles />
        <DisplayCongif />
                <ThemeToggler toggleTheme={toggleTheme} />
                <Home />
                <About />
                <Tech />
                <Projects links={links}/>
        </ThemeProvider>
    )
}

export default App
