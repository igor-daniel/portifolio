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
            <p>Um desenvolvedor Web Frontend, apaixonado por tecnologia e especialista em criação de sites</p>
            <a className='botao' target='blank' href="https://wa.me/5521965961939?text=Olá%20Igor,%20tenho%20interesse%20em%20seus%20serciços">Fale comigo</a>
          </section>
          <section className="image" data-tilt="">
            <img data-tilt src={programer} alt="Foto de Igor" />
          </section>
        </div>
      </main>
    </>
  )
}