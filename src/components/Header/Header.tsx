import React from "react";
import logo from './Foto-icon.svg'
import menuHamburguer from './hambuguer.png'
import './header.css'
export const Header = () => {
  const setMenu = () => {
    let menu = document.querySelector('nav');
    menu?.classList.toggle("block")
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
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato" >Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}