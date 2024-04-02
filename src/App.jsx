import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from "./utils/themes.js";
import { useState } from 'react';
import Navbar from './components/NavBar/index.jsx';
import Hero from './components/HeroSection/index.jsx';
import Skills from './components/Skills/index.jsx';
import Education from './components/Education/index.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/Experience/index.jsx';
import Projects from './components/Projects/index.jsx';
import Contact from './components/Contact/index.jsx';
import About from './components/About/index.jsx';
import Footer from './components/Footer/index.jsx';
import ProjectDetails from './components/ProjectDetails/index.jsx';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const toggleTheme = (currentTheme) => {
  return currentTheme === lightTheme ? darkTheme : lightTheme;
};

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [theme, setTheme] = useState(darkTheme);
  const toggleThemeMode = () => {
    setTheme(toggleTheme);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Navbar />
        <Body>
          <Hero/>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
