// import js from './js.svg'
import './skills.css'
import adereco from '../sobre/adereço.svg'
import react from './svg skils/react.svg'
import typescript from './svg skils/typescript.svg'
import js from './svg skils/javascript.svg'
import css from './svg skils/css.svg'
import html from './svg skils/html.svg'
import git from './svg skils/git.svg'

export const Skills = ()=>{
  let imgs = document.querySelectorAll('img')
    imgs.forEach(element => {
    
  });
  return (
    <>
    <section id='skills' className='bg'>
      <div  className='limite'>
      <div className="sec-tittle">
            <img src={adereco} alt="" />
            <h2>Habilidades</h2>
          </div>
    <div className="skill-body"> 
    
    <div className='tool'>
      <img id='rea' src={react} alt="React" />
      <span className='tool-text'>REACT</span>
    </div>

    <div className='tool'>
      <img id='rea' src={typescript} alt="React" />
      <span className='tool-text'>TYPESCRIPT</span>
    </div>
    <div className='tool'>
      <img id='rea' src={js} alt="React" />
      <span className='tool-text'>JAVASCRIPT</span>
    </div>
    <div className='tool'>
      <img id='rea' src={css} alt="React" />
      <span className='tool-text'>CSS</span>
    </div>
    <div className='tool'>
      <img id='rea' src={html} alt="React" />
      <span className='tool-text'>HTML</span>
    </div>
    <div className='tool d-flex'>
      <img id='rea' src={git} alt="React" />
      <span className='tool-text'>GIT</span>
    </div>
    </div>

      </div>
    
    </section>
   
    </>
  )
}