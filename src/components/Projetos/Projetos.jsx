import './projetos.css'
import adereco from '../sobre/adereço.svg'
import jordanShoes from './img/JordanShoes.png'
import feane from './img/feaneHamb.png'
import blog from './img/blog.png'
import Pgerador from './img/geradorConselho.png'
import snap from './img/snap.png'
import orkut from './img/orkutPrint.png'
import iconGit from './img/ic-github.svg'
import iconGlobe from './img/wed.svg'
import calcImc from './img/printImc.png'

export const Projetos = ()=>{
  return(
    <>
    <section id='projetos' className="bg">
    <div className="sec-tittle">
            <img src={adereco} alt="" />
            <h2>Projetos</h2>
          </div>
    <div className="projetos-body limite">
    <div className="card">
        <div className="img">
          <img src={orkut} alt="" />
        </div>
        <div className="text">
          <h4>Orkut</h4>
          <p>Uma cópia da antiga rede social Orkut.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank' href="https://orkutfake.netlify.app/" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank'  href="https://github.com/igor-daniel?tab=repositories" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>
    <div className="card">
        <div className="img">
          <img src={jordanShoes} alt="" />
        </div>
        <div className="text">
          <h4>Jordan Shoes</h4>
          <p>Uma landing page para divulgar o tênis da Nike em parceria com Michael Jordan.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank' href="https://fastidious-kangaroo-81e091.netlify.app/" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank'  href="https://github.com/igor-daniel/jordanshoes" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>
    <div className="card">
        <div className="img">
          <img src={feane} alt="" />
        </div>
        <div className="text">
          <h4>Feane Hamburgueria</h4>
          <p>Um site constitucional, de uma empresa fictícia com intuito de evoluir minhas habilidades.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank' href="https://courageous-pudding-8e2c46.netlify.app" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank'  href="https://github.com/igor-daniel/feane-hamburgueria" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src={calcImc} alt="" />
        </div>
        <div className="text">
          <h4>Calculadora de IMC</h4>
          <p>Colocando seu peso e sua altura obtenha seu indice de massa corporal(imc).
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank' href="https://kaleidoscopic-malasada-947d5e.netlify.app/" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank' href="https://github.com/igor-daniel/Calculadora-IMC-react" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src={blog} alt="" />
        </div>
        <div className="text">
          <h4>Blog</h4>
          <p>Um simples blog, feito com intuito de exercitar as habilidades.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank' href="https://blogcode20.netlify.app" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank' href="https://github.com/igor-daniel/blog-code" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>



      <div className="card">
        <div className="img">
          <img src={Pgerador} alt="" />
        </div>
        <div className="text">
          <h4>Gerador de Conselhos</h4>
          <p>Com apenas um click você recebe um conselho. App construido apartir de uma API.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank'  href="https://comfy-strudel-e22f22.netlify.app/" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a className='botao-card' target='_blank'  href="https://github.com/igor-daniel/gerador-de-conselhos" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>
      <div className="card">
        <div className="img">
          <img src={snap} alt="" />
        </div>
        <div className="text">
          <h4>Snap</h4>
          <p>Desefio do site front-end-mentor, com o intuito de treinar programação.
          </p>
        </div>
        <div className="btns">
          <a className='botao-card' target='_blank'  href="https://sweet-madeleine-abfc99.netlify.app/" rel="noreferrer">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a  className='botao-card' target='_blank' href="https://github.com/igor-daniel/single-page" rel="noreferrer">
            <div className="txt">
            <img src={iconGit} alt="" />
            <p>Code</p>
            </div>
            
          </a>
        </div>
      </div>


  

      

    </div>
    </section>
    
    </>
  );
}
