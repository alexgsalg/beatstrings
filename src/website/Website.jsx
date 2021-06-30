import React from 'react'
import './style-website.scss'

import {ReactComponent as Logo} from "../assets/imgs/logo_negativa.svg"
import {ReactComponent as LogoFooter} from "../assets/imgs/logo_footer.svg"

import Classes from '../assets/imgs/icon-classes.png';
import Books from '../assets/imgs/icon-books.png';
import Support from '../assets/imgs/icon-support.png';
import Instrument from '../assets/imgs/icon-instrument.png';

function Website() {

   const instruments = [
      {
        id: 0,
        title: 'Erudito',
        set: [
          {
            title: 'Violino',
            img: '../assets/imgs/inst-violin.png',
          },
          { title: 'Saxophone', img: '../assets/imgs/inst-sax.png' },
          {
            title: 'Teclado / Piano',
            img: '../assets/imgs/inst-piano.png',
          },
        ],
      },
      {
        id: 1,
        title: 'Popular',
        set: [
          {
            title: 'Guitar',
            img: '../assets/imgs/inst-eletricguitar.png',
          },
          { title: 'Violão', img: '../assets/imgs/inst-guitar.png' },
          { title: 'Baixo', img: '../assets/imgs/inst-bass.png' },
        ],
      },
      {
        id: 2,
        title: 'Teoria musical',
        set: [
          {
            title: 'Inicialização',
            img: '../assets/imgs/inst-pick.png',
          },
          {
            title: 'Teoria avançada',
            img: '../assets/imgs/inst-pick.png',
          },
          {
            title: 'Musicalização infantil',
            img: '../assets/imgs/inst-pick.png',
          },
        ],
      },
    ];

	return (
		<>
		<header className="header" >
			<div className="wrapper">
				<a href="/" className="logo">
				<Logo/>
				</a>
				<div className="mobile">
				{/* <fa-icon [icon]="openMobile" className="openMobile"></fa-icon>
				<fa-icon [icon]="closeMobile" className="closeMobile"></fa-icon> */}
				</div>
				<nav className="header_nav">
				<a href="#hero" className="header_nav__item">Home</a>
				<a href="#about" className="header_nav__item">sobre</a>
				<a href="#instruments" className="header_nav__item">Instrumentos</a>
				<a href="#contact" className="header_nav__item">Contato</a>
				<a href="#hero" className="header_nav__item--platform">Acesse a plataforma</a>
				</nav>
			</div>
		</header>
    <main className="main">
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

        {/* <!-- ABOUT --> */}
        <section className="about odd" id="about">
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

        <section className="instruments" id="instruments">
          <div className="wrapper shorter">
            <h2 className="title_secondary center"><strong>O que</strong> ensinamos</h2>
            <div className="grid">
               {/* Loop de instruments */}
               {instruments.map(item => 
                  <div className="genre" key={item.title}>
                     <h4 className="genre__title">{item.title}</h4>
                     <ul>
                        {item.set.map(instrument => 
                           <li className="genre__Item" key={instrument.title}>
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

        <section id="contact" className="footer">
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
                {/* <a href="#" className="footer_social__item">
                 //  <fa-icon [icon]="faWhatsapp"></fa-icon
                ></a>
                <a href="#" className="footer_social__item"
                  ><fa-icon [icon]="faInstagram"></fa-icon
                ></a>
                <a href="#" className="footer_social__item"
                  ><fa-icon [icon]="faFacebook"></fa-icon
                ></a> */}
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
        </section>
        <section className="copyright">
         <LogoFooter/>
          <p>Direitos reservados BeatStrings 2021</p>
          <span></span>
        </section>
      </main>
		</>
	)
}

export default Website
