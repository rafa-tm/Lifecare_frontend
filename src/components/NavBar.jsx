import { Button } from "./Button";

export default function NavBar() {
  return (
    <header class="header">
      <img src="./assets/images/Logotipo.svg" alt="Logotipo LifeCare" />
      <div class="header__options header__options-show">
        <a href="#section2">
          <button class="button-ternary anchor">Como Funciona</button>
        </a>
        <a href="#section3">
          <button class="button-ternary anchor">Especialidades</button>
        </a>
        <a href="/login.html">
          <button class="button-primary">Entrar ou Cadastrar</button>
        </a>
      </div>
    </header>
  );
}
