import './sobre.css'
import Foto from './FotoSobre.svg'
import adereco from './adereço.svg'
export const Sobre = () => {
  return (
    <>
      <section id="sobre" className="sec-sobre bg">
        <div className="limite ">
          <div className="sec-tittle">
            <img src={adereco} alt="" />
            <h2>Sobre</h2>
          </div>
          <div className="sec-body sobre-content">
            <div className="sobre-img">
              <img src={Foto} alt="Foto de Igor" />
              <a href="#" className='botao'>Currículo</a>
            </div>
            <div className="sobre-info--historia">
              <h4>Conheça um pouco sobre mim:</h4>
              <p>Olá me chamo Igor Daniel tenho 21 anos, moro no Rio de Janeiro. Sou universitário e estou cursando Análise e desenvolvimento de sistemas. Sou entusiasta e apaixonado por tecnologia e estou em busca da vaga de desenvolvedor front-and.
              </p> <br />
              <p>Ex militar do Exército Brasileiro fiz uma transição para a área da tecnologia, área que amo de fato e tenho prazer em aprender mais a cada dia.</p>
            </div>
          </div>
        </div >
      </section >

    </>
  )
};