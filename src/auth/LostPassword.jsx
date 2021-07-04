import React from "react";
import { NavLink } from "react-router-dom";
import "./style-auth.scss";

import { ReactComponent as Logo } from "../assets/imgs/Logo_login.svg";

function Login() {
  return (
    <main className="auth">
      <div className="auth_info">
        <Logo className="logo" />
        <form action="/login" className="auth_form">
          <h1 className="auth_form__title">Recuperar senha</h1>
          <p className="password_info">
            Para recuperar sua senha insira seu email no campo abaixo para
            receber seu token de acesso.
          </p>
          <div className="auth_form__input">
            <input type="mail" name="email" placeholder="Digite seu e-mail" />
          </div>
          <input
            type="submit"
            className="auth_form__btn"
            value="Receber token"
          />
        </form>
      </div>
      <div className="auth_side">
        <NavLink to="/login" className="nav__item">
          Voltar a home
        </NavLink>
        <p className="citation">Lorem ipsum dolor sit amet, consectetur</p>
        <p className="citation_name">- Lorem ipsum dolor</p>
      </div>
    </main>
  );
}

export default Login;
