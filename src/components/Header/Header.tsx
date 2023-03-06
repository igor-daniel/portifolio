import React from "react";
import logo from './ID.png'
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
      </div>

      <div onClick={setMenu} className="hamburguer">
        <img src={menuHamburguer} alt="" />
      </div>
      <nav className="menu">
        <ul>
          <li>Sobre mim</li>
          <li>Skills</li>
          <li>Projetos</li>
          <li>Currículo</li>
        </ul>
      </nav>
    </header>
  )
}