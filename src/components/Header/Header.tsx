import React from "react";
import logo from './Foto-icon.svg'
import menuHamburguer from './hambu.svg'
import './header.css'
export const Header = () => {

  const setClass = () => {
    document.querySelector('.menu-dropdown')?.classList.toggle('active')
  }


  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Igor Daniel</p>
      </div>

      {/* <div onClick={setMenu} className="hamburguer">
        <img src={menuHamburguer} alt="" />
      </div> */}

      <nav className="menu">
        <div className="bt" onClick={setClass}>
          <img className="hamburguer" src={menuHamburguer} alt="" />
        </div>

        <ul className="men">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato" >Contato</a></li>
        </ul>
      </nav>
      <div className="menu-dropdown">
        <ul className="men">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato" >Contato</a></li>
        </ul>
      </div>
    </header>
  )
}