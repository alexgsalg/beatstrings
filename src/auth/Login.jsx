import React from "react";
import { NavLink } from "react-router-dom";
import "./style-auth.scss";

import { ReactComponent as Logo } from "../assets/imgs/Logo_login.svg";

function Login() {
  return (
    <main className="auth">
      <div className="auth_info">
        <Logo className="logo" />
        <form action="" className="auth_form">
          <h1 className="auth_form__title">Login</h1>
          <div className="auth_form__input">
            <input type="mail" name="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="auth_form__input">
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </div>
          <input
            type="submit"
            className="auth_form__btn"
            value="Acessar conta"
          />
          <div className="forgot_pass">
            <NavLink to="/esqueci-senha">Esqueci a senha</NavLink>
          </div>
        </form>
      </div>
      <div className="auth_side">
        <NavLink to="/" className="nav__item">
          Voltar a home
        </NavLink>
        <p className="citation">Lorem ipsum dolor sit amet, consectetur</p>
        <p className="citation_name">- Lorem ipsum dolor</p>
      </div>
    </main>
  );
}

export default Login;
