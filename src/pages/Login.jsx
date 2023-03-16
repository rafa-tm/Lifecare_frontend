import React from "react";
import NavBar from "../components/NavBar";
import TextField from "../components/TextField";
import imagemCare from "/Check_amico.svg";
import Button from "../components/Button";

export default function Profile() {
  return (
    <div>
      <NavBar type="back" />
      <div className=" flex flex-row gap-32 w-full my-32 justify-center items-center">
        <img src={imagemCare} alt="" className="max-w-md" />
        <div className="w-1/2 max-w-lg flex flex-col gap-10 justify-center">
          <form action="" className="flex flex-col gap-4 items-center">
            <TextField
              id="email"
              placeholder="seuemail@email.com"
              label="E-mail"
              type="text"
              size="full"
              onChange=""
            />
            <TextField
              id="senha"
              placeholder="Insira sua senha"
              label="Senha"
              type="password"
              size="full"
              onChange=""
            />
            <Button label="Entrar" type="primary" action="" />
          </form>
          <div className="flex flex-col gap-6 justify-between items-center">
            <p className="text-center text-lg font-bold">
              Ainda não possui uma conta? Crie agora mesmo!
            </p>
            <div className="flex flex-row w-3/4 justify-between items-center">
              <Button
                label="Sou cliente"
                type="tertiary"
                link="/cadastro/cliente"
              />
              <Button
                label="Sou profissional"
                type="tertiary"
                link="/cadastro/cliente"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
