import React from "react";
import './contato.css'
import adereco from '../sobre/adereço.svg'
import casa from './img/casa.svg'
import carta from './img/carta.svg'
import git from './img/github.svg'
import linkedin from './img/linkedin.svg'

export const Contato = () => {
  return (
    <>
      <section id="contato" className="bg">
        <div className="limite">
          <div className="sec-tittle">
            <img src={adereco} alt="" />
            <h2>Contato</h2>
          </div>
          <div className="contat-desc">
            <p>Fique a vontade para entrar em contanto, será um prazer atende-lo.</p>
          </div>
          <div className="redes">
            <div className="rede">
              <img src={casa} alt="" />
              <a href="#">https://igor-daniel.github.io/portifolio/</a>
            </div>
            <div className="rede">
              <img src={git} alt="" />
              <a href="#">https://github.com/igor-daniel</a>
            </div>
            <div className="rede">
              <img src={carta} alt="" />
              <a href="#">igord1870@gmail.com</a>
            </div>
            <div className="rede">
              <img src={linkedin} alt="" />
              <a href="#">https://acesse.one/aUfRc</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}