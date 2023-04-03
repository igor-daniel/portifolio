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
          <li><a href="#sobre">Sobre mim</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="./curriculo.pdf" >Currículo</a></li>
        </ul>
      </nav>
    </header>
  )
}