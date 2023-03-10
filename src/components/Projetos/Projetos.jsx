import './projetos.css'
import Pgerador from './img/geradorConselho.png'
import snap from './img/snap.png'
import iconGit from './img/github.png'
import iconGlobe from './img/globe.png'

export const Projetos = ()=>{
  return(
    <>
    <section className="projetos">
    <div className="head">
      <h1>Projetos</h1>
    </div>
    <div className="projetos-body limite">
      <div className="card">
        <div className="img">
          <img src={Pgerador} alt="" />
        </div>
        <div className="text">
          <h4>Gerador de Conselhos</h4>
          <p>Com apenas um click você recebe um conselho. App construido apartir de um API
          </p>
        </div>
        <div className="btns">
          <a href="https://comfy-strudel-e22f22.netlify.app/">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a href="https://github.com/igor-daniel/gerador-de-conselhos">
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
          <p>Desefio do site front-end-mentor, con o intuito de treinar programação.
          </p>
        </div>
        <div className="btns">
          <a href="https://sweet-madeleine-abfc99.netlify.app/">
            <div className="txt">
            <img src={iconGlobe} alt="" />
            <p>Site</p>
            </div>
            
          </a>
          <a href="https://github.com/igor-daniel/single-page">
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
