import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import './style-website.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Instruments from '../assets/mock/instruments'

import {ReactComponent as Logo} from "../assets/imgs/logo_negativa.svg"
import {ReactComponent as LogoFooter} from "../assets/imgs/logo_footer.svg"

import Classes from '../assets/imgs/icon-classes.png';
import Books from '../assets/imgs/icon-books.png';
import Support from '../assets/imgs/icon-support.png';
import Instrument from '../assets/imgs/icon-instrument.png';

function Website() {

   const [farFromTop, setFarFromTop] = useState(false)

   const scrollEvent = (e) => {
      const scrollFromTop = window.pageYOffset;
  
      if (scrollFromTop >= 150) {
        setFarFromTop(true)
      } else {
         setFarFromTop(false)
      }
    }

   useEffect(() => {
      window.addEventListener('scroll', scrollEvent);
      
      return
   }, [])

	return (
		<>
		<header className={`header ${farFromTop ? 'sticky' : ''}`} >
			<div className="wrapper">
				<a href="/" className="logo">
				<Logo/>
				</a>
				<div className="mobile">
            <FontAwesomeIcon icon={faBars} className="openMobile"/>
            <FontAwesomeIcon icon={faTimes} className="closeMobile"/>
				</div>
				<nav className="header_nav">
            <Link className="header_nav__item" activeClass="active" to="hero" spy={true} smooth={true} duration={1000}>Home</Link>
            <Link className="header_nav__item" activeClass="active" to="about" spy={true} smooth={true} duration={1000}>Sobre</Link>
            <Link className="header_nav__item" activeClass="active" to="instruments" spy={true} smooth={true} duration={1000}>Instrumentos</Link>
            <Link className="header_nav__item" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contato</Link>
				<a href="#hero" className="header_nav__item--platform" activeClass="active">Acesse a plataforma</a>
				</nav>
			</div>
		</header>
    <main className="main">
      {/* <!-- HERO --> */}
      <div id="hero">
        <section className="hero">
          <div className="wrapper">
            <h1 className="hero__title">
              <strong>Aprenda a Deixar</strong> a música fluir
            </h1>
            <p className="hero__subtitle">Uma nova forma de aprender um instrumento</p>
          </div>
        </section>

        {/* <!-- FEATURES --> */}
        <section className="feature">
        <div className="wrapper">
          <div className="feature_element">
            <img src={Classes} alt="" />
            <p>Aulas online, presenciais e videoaulas</p>
          </div>
          <div className="feature_element">
            <img src={Books} alt="" />
            <p>Material de estudo disponível na plataforma</p>
          </div>
          <div className="feature_element">
            <img src={Support} alt="" />
            <p>Suporte diretamente com o professor</p>
          </div>
          <div className="feature_element">
            <img src={Instrument} alt="" />
            <p>Instrumentos e acessórios</p>
          </div>
        </div>
      </section>
      </div>

      {/* <!-- ABOUT --> */}
      <div id="about">
        <section className="about odd">
          <div className="wrapper">
            <div className="content_info">
              <h2 className="title_secondary"><strong>Beat</strong> Strings</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                phasellus accumsan massa posuere iaculis a pretium ullamcorper id. Nam
                suspendisse feugiat quis tempus sed et. Vitae magnis viverra nisl
                faucibus sed sed quis lorem lorem. Quis quisque justo, posuere
                lobortis. Dolor mattis bibendum varius lacus. Ullamcorper duis egestas
                iaculis orci vel nulla dolor. Enim nibh aliquet pulvinar cras commodo
                volutpat viverra quis. Commodo amet sed velit felis commodo quam.
              </p>
            </div>
            <div className="content_img guitar"></div>
          </div>
        </section>

        <section className="about">
          <div className="wrapper">
            <div className="content_img violin"></div>
            <div className="content_info">
              <h2 className="title_secondary"><strong>Temos muito</strong> a oferecer</h2>
              <ul className="benefits">
                <li className="beneficts_item">
                  <svg
                    className="beneficts_item__icon"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61658 2L14.6166 15L1.61658 28.0001"
                      stroke="#EAEAEA"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2166 2L30.2167 15L17.2166 28.0001"
                      stroke="#AEAEAE"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="beneficts_item__title">Auxílio com materiais</h3>
                    <p className="beneficts_item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                      phasellus accumsan massa
                    </p>
                  </div>
                </li>

                <li className="beneficts_item">
                  <svg
                    className="beneficts_item__icon"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61658 2L14.6166 15L1.61658 28.0001"
                      stroke="#EAEAEA"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2166 2L30.2167 15L17.2166 28.0001"
                      stroke="#AEAEAE"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="beneficts_item__title">Acompanhamento de estudos</h3>
                    <p className="beneficts_item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                      phasellus accumsan massa
                    </p>
                  </div>
                </li>

                <li className="beneficts_item">
                  <svg
                    className="beneficts_item__icon"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61658 2L14.6166 15L1.61658 28.0001"
                      stroke="#EAEAEA"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2166 2L30.2167 15L17.2166 28.0001"
                      stroke="#AEAEAE"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="beneficts_item__title">Suporte de dúvidas</h3>
                    <p className="beneficts_item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                      phasellus accumsan massa
                    </p>
                  </div>
                </li>

                <li className="beneficts_item">
                  <svg
                    className="beneficts_item__icon"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61658 2L14.6166 15L1.61658 28.0001"
                      stroke="#EAEAEA"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2166 2L30.2167 15L17.2166 28.0001"
                      stroke="#AEAEAE"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="beneficts_item__title">Workshops com convidados</h3>
                    <p className="beneficts_item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                      phasellus accumsan massa
                    </p>
                  </div>
                </li>

                <li className="beneficts_item">
                  <svg
                    className="beneficts_item__icon"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61658 2L14.6166 15L1.61658 28.0001"
                      stroke="#EAEAEA"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.2166 2L30.2167 15L17.2166 28.0001"
                      stroke="#AEAEAE"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="beneficts_item__title">Apresentações Semestrais</h3>
                    <p className="beneficts_item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                      phasellus accumsan massa
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section className="instruments" id="instruments">
        <div className="wrapper shorter">
          <h2 className="title_secondary center"><strong>O que</strong> ensinamos</h2>
          <div className="grid">
              {/* Loop de instruments */}
              {Instruments.map(item => 
                <div className="genre" key={item.title}>
                    <h4 className="genre__title">{item.title}</h4>
                    <ul>
                      {item.set.map(instrument => 
                          <li className="genre__item" key={instrument.title}>
                            <img src={ instrument.img } alt="" />
                            <p>{instrument.title}</p>
                          </li>
                      )}
                    </ul>
                </div>
              )}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="wrapper shorter">
          <div className="footer_info">
            <h2 className="title_secondary"><strong>Fale</strong> conosco</h2>
            <a href="mailto:contato@beatstrings.com.br" className="footer_info__link"
              >contato@beatstrings.com.br</a
            >
            <a href="tel:+5561999999999" className="footer_info__link"
              >(61) 99999-9999</a
            >
            <div className="footer_social">
              {/* </div> */}
              <a href="#" className="footer_social__item">
                  <FontAwesomeIcon icon={faWhatsapp}/>
              </a>
              <a href="#" className="footer_social__item">
                  <FontAwesomeIcon icon={faInstagram}/>       
              </a>
              <a href="#" className="footer_social__item">
                  <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </div>
          </div>
            <form action="" className="footer_form" name="contactForm">
              <div className="input_group">
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Digite seu nome"
                />
              </div>
              <div className="input_group">
                <input type="mail" name="email" placeholder="Digite seu e-mail" />
              </div>
              <div className="input_group fullsize">
                <textarea
                    type="text"
                    name="mensagem"
                    placeholder="Qual a sua dúvida?"
                ></textarea>
              </div>
              <div className="input_btn">
                <input type="submit" value="Enviar mensagem" />
              </div>
            </form>
          </div>
          <div className="copyright">
              <LogoFooter/>
              <p>Direitos reservados BeatStrings 2021</p>
              <span></span>
          </div>
        </footer>
      </main>
		</>
	)
}

export default Website
