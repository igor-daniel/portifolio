import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'
import { Sobre } from './components/sobre/Sobre'
import { Skills } from './components/Skills/Skills'
import { Projetos } from './components/Projetos/Projetos'
import { Footer } from './components/Footer/Footer'



function App() {
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500;700;900&display=swap');
      </style>
      <Header />
      <Main />
      <Sobre />
      <Skills />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
