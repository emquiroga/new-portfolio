import React, { useState } from 'react'

import ThemeToggler from 'components/Theme-Toggler/Theme-Toggler'
import Home from 'sections/Home'
import About from 'sections/About'
import Tech from 'sections/Tech'
import Projects from 'sections/Projects'
import Footer from 'components/Footer/Footer'

import { about, links, tech } from 'content'

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
                <About content={about}/>
                <Tech content={tech}/>
                <Projects links={links}/>
                <Footer />
        </ThemeProvider>
    )
}

export default App
