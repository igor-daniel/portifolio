import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'
import { Sobre } from './components/sobre/Sobre'
import { Skills } from './components/Skills/Skills'
import { Footer } from './components/Footer/Footer'



function App() {
  return (
    <>
      <Header />
      <Main />
      <Sobre />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
