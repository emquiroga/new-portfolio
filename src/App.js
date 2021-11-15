import { useState } from 'react'

import ThemeToggler from 'components/Theme-Toggler/Theme-Toggler'
import Home from 'sections/Home'
import Main from 'sections/Main'
import Footer from 'components/Footer/Footer'

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
                <Main />
                <Footer />
        </ThemeProvider>
    )
}

export default App
