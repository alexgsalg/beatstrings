import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
import "./style-Homepage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
  // faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Instruments from "../assets/mock/instruments";

import { ReactComponent as Logo } from "../assets/imgs/logo_negativa.svg";
import { ReactComponent as LogoFooter } from "../assets/imgs/logo_footer.svg";
import Classes from "../assets/imgs/icon-classes.png";
import Books from "../assets/imgs/icon-books.png";
import Support from "../assets/imgs/icon-support.png";
import Instrument from "../assets/imgs/icon-instrument.png";

function Website() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [farFromTop, setFarFromTop] = useState(false);

  const scrollEvent = (e) => {
    const scrollFromTop = window.pageYOffset;

    if (scrollFromTop >= 150) {
      setFarFromTop(true);
    } else {
      setFarFromTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return;
  }, []);

  return (
    <>
      <header className={`header ${farFromTop ? "sticky" : ""}`}>
        <div className="wrapper">
          <a href="/" className="logo">
            <Logo />
          </a>
          <div
            className="mobile"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="openMobile"
            />
          </div>
          <nav className={`header_nav ${isMenuOpen ? "open" : ""}`}>
            <Link
              className="header_nav__item"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
            <Link
              className="header_nav__item"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Sobre
            </Link>
            <Link
              className="header_nav__item"
              activeClass="active"
              to="instruments"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Instrumentos
            </Link>
            <Link
              className="header_nav__item"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contato
            </Link>
            {/* <NavLink to="/login" className="header_nav__item--platform">
              Acesse a plataforma
            </NavLink> */}
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
              <p className="hero__subtitle">
                Uma nova forma de aprender seu instrumento
              </p>
            </div>
          </section>

          {/* <!-- FEATURES --> */}
          <section className="feature">
            <div className="wrapper">
              <div className="feature_element">
                <img src={Classes} alt="" />
                <p>Aulas online e presenciais</p>
              </div>
              <div className="feature_element">
                <img src={Books} alt="" />
                <p>Material de estudo</p>
              </div>
              <div className="feature_element">
                <img src={Support} alt="" />
                <p>Suporte diretamente com o professor</p>
              </div>
              <div className="feature_element">
                <img src={Instrument} alt="" />
                <p>Ensaios e workshops</p>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- ABOUT --> */}
        <div id="about">
          <section className="about odd">
            <div className="wrapper">
              <div className="content_info">
                <h2 className="title_secondary">
                  <strong>Beat</strong> Strings
                </h2>
                <p>
                  A Beat Strings foi criada com o intuito de ensinar os seus alunos de forma personalizada e também ajuda-los a colocar em prática todo o conteúdo lecionado inspirando-os desde a técnica de seu instrumento até a prática de sua música favorita. Além disso, a Beats visa promover ensaios e apresentações entre alunos para que desde o início possam se divertir ao tocar em público e com amigos, colocando em prática os conhecimentos adquiridos nas aulas
                </p>
              </div>
              <div className="content_img guitar"></div>
            </div>
          </section>

          <section className="about">
            <div className="wrapper">
              <div className="content_img violin"></div>
              <div className="content_info">
                <h2 className="title_secondary">
                  <strong>Temos muito</strong> a oferecer
                </h2>
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
                      <h3 className="beneficts_item__title">
                        Auxílio com materiais
                      </h3>
                      <p className="beneficts_item__text">
                        Temos todo o material utilizado em aula no formato pdf entregue ao aluno de acordo com a utilização em cada aula;
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
                      <h3 className="beneficts_item__title">
                        Acompanhamento de estudos
                      </h3>
                      <p className="beneficts_item__text">
                        Além das aulas, o contato on-line com o professor pode auxiliar no desenvolvimento prático, com foco personalizado de acordo com a necessidade de cada aluno;
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
                      <h3 className="beneficts_item__title">
                        Suporte de dúvidas
                      </h3>
                      <p className="beneficts_item__text">
                        Suporte junto ao professor para sanar dúvidas através do acompanhamento de estudos, melhorando o contato e não sendo necessário apenas a aula para resolver um dúvida; 
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
                      <h3 className="beneficts_item__title">
                        Workshops com convidados
                      </h3>
                      <p className="beneficts_item__text">
                        Workshops, palestras e bancas de audição com músicos e professores
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
                      <h3 className="beneficts_item__title">
                        Apresentações Semestrais
                      </h3>
                      <p className="beneficts_item__text">
                        As apresentações têm o intuito de proporcionar experiências únicas aos alunos para que vivenciem a prática musical da melhor forma;
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
            <h2 className="title_secondary center">
              <strong>O que</strong> ensinamos
            </h2>
            <div className="grid">
              {/* Loop de instruments */}
              {Instruments.map((item) => (
                <div className="genre" key={item.title}>
                  <h4 className="genre__title">{item.title}</h4>
                  <ul>
                    {item.set.map((instrument) => (
                      <li className="genre__item" key={instrument.title}>
                        <img src={instrument.img} alt="" />
                        <p>{instrument.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="footer">
          <div className="wrapper shorter">
            <div className="footer_info">
              <h2 className="title_secondary">
                <strong>Converse</strong> com a gente
              </h2>
              <p>
                <a
                  href="mailto:contato@beatstrings.com.br"
                  className="footer_info__link"
                >
                  contato@beatstrings.com.br
                </a>
              </p>
              <p>
                <a href="tel:+5561981324249" className="footer_info__link">
                  (61) 98132-4249
                </a>
              </p>

              <div className="footer_social">
                <a href="https://api.whatsapp.com/send?phone=5561981324249&text=Olá! Gostaria de algumas informações" className="footer_social__item" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com/beatstringsmusicstudio/" className="footer_social__item" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                {/* <a href="#" className="footer_social__item" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a> */}
              </div>
            </div>
            {/* form */}
            {/* <div className="footer_form" name="contactForm">
              <div className="input_group fullsize">
                <textarea
                  type="text"
                  name="mensagem"
                  value={formMessage}
                  placeholder="Qual a sua dúvida?"
                ></textarea>
              </div>
              <div className="input_group">
                <input
                  type="text"
                  name="nome"
                  id="inputName"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="input_group clear">
                <a href={formMessage} className="input_btn" >Enviar dúvida <FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
            </div> */} {/* end form */}

              <LogoFooter className="provisoryLogo"/>

          </div>
          {/*<div className="copyright">
             <LogoFooter /> 
            <p>Direitos reservados BeatStrings 2021</p>
          </div>*/}
        </footer>
      </main>
    </>
  );
}

export default Website;
