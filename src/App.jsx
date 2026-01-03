import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Projects from './components/Projetos/Projects.jsx'
import Contato from './components/Contato/Contato.jsx'
import Tecnologias from './components/Tecnologias/Tecnologias.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Tecnologias />
      <Contato />
    </>
  );
}

export default App;