import programer from './Programmer-cuate.svg'
import './main.css'

export const Main = () => {
  return (
    <>
      <main>
        <div className="limite conteudo">
          <section className="main-sec ">
            <p className='cargo'>Web Developer</p>
            <h1>Olá eu sou Igor Daniel <strong>.</strong></h1>
            <p>Um desenvolvedor Web Frontend, apaixonado por <br /> tecnologia, especialista em criação de sites</p>
            <a className='botao' href="https://www.linkedin.com/in/igor-daniel-8bbb74216/">Fale comigo</a>
          </section>
          <section className="image" data-tilt="">
            <img data-tilt src={programer} alt="Foto de Igor" />
          </section>
        </div>
      </main>
    </>
  )
}