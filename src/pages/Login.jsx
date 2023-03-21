import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import TextField from "../components/TextField";
import imagemCare from "/Check_amico.svg";
import Button from "../components/Button";

import api from "../services/api";

export default function Profile() {
  const history = useNavigate();
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    async function autoLogin() {
      const token_local = localStorage.getItem("token");
      try {
        if (token_local != null) {
          const data = { token: token_local };
          await api.post("verificalogin", data).then((response) => {
            if (response.data.user) {
              history("/profile");
            }
          });
        }
      } catch (err) {
        setHasError(err.response.data.erro);
      }
    }
    autoLogin();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const data = { email, senha };
      const response = await api.post("login", data);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("type", response.data.type);
      history("/profile");
    } catch (err) {
      setHasError(err.response.data.erro);
    }
  }

  return (
    <div>
      <NavBar type="back" />
      <div className=" flex flex-col-reverse gap-16 w-full my-32 justify-center items-center lg:flex-row">
        <img src={imagemCare} alt="" className="w-3/4 max-w-md" />
        <div className="w-10/12 max-w-xl flex flex-col gap-10 justify-center items-center">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 items-center w-full"
          >
            <TextField
              id="email"
              placeholder="seuemail@email.com"
              label="E-mail"
              type="email"
              size="full"
              onChange=""
              required={true}
            />
            <TextField
              id="senha"
              placeholder="Insira sua senha"
              label="Senha"
              type="password"
              size="full"
              onChange=""
              required={true}
            />
            {hasError && (
              <div className="bg-red-700 p-2 w-full rounded-lg text-white text-center text-sm font-semibold">
                <p>{hasError}</p>
              </div>
            )}
            <Button label="Entrar" type="primary" action="" />
          </form>

          <div className="flex flex-col gap-6 justify-between items-center md:w-3/4">
            <p className="text-center text-lg font-bold">
              Ainda não possui uma conta? Crie agora mesmo!
            </p>
            <div className="flex flex-row gap-4 w-full justify-between items-center">
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
