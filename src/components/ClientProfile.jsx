import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import NavBar from "./NavBar";

export default function ClientProfile() {
  const [user, setUser] = useState("");
  const [consultas, setConsultas] = useState([]);
  const history = useNavigate();
  const typeUser = localStorage.getItem("type");
  const tokenUser = localStorage.getItem("token");

  useEffect(() => {
    async function getUser() {
      const data = { token: tokenUser };
      await api.post("verificalogin", data).then((response) => {
        setUser(response.data.user);
      });
    }
    async function getConsultas() {
      const data = { type: typeUser, token: tokenUser };
      await api.post("consultasuser", data).then((response) => {
        setConsultas(response.data);
      });
    }
    getUser();
    getConsultas();
  }, []);

  async function handleLogout() {
    localStorage.clear();
    history("/");
  }

  const styleLine = "flex flex-row w-full justify-between";
  return (
    <div>
      <NavBar type="client" action={() => handleLogout()} />
      <div className="w-full flex flex-col items-center my-10">
        <div className="flex flex-col w-3/5 gap-2">
          <p className="font-bold text-xl">Olá {user.nome} ,</p>
          <p className="text-xl">Confira suas consultas marcadas:</p>
        </div>
        <div className="w-[90%] grid grid-cols-3 p-10 gap-2 lg:grid-cols-2">
          {consultas.map((consulta) => (
            <div
              key={consulta.id}
              className="bg-white border-gray-200 border-2 shadow-lg flex flex-col gap-2 p-8 rounded-lg"
            >
              <div className={styleLine}>
                <p>Data da consulta</p>
                <strong>{consulta.data + " às " + consulta.hora}</strong>
              </div>
              <div className={styleLine}>
                <p>Paciente:</p>
                <strong>{consulta.cliente.nome}</strong>
              </div>
              <div className={styleLine}>
                <p>Profissional:</p>
                <strong>{consulta.profissional.nome}</strong>
              </div>
              <div className={styleLine}>
                <p>Area:</p>
                <strong>{consulta.profissional.area}</strong>
              </div>
              <div className={styleLine}>
                <p>Especialidade:</p>
                <strong>{consulta.profissional.especialidade}</strong>
              </div>
              <div className={styleLine}>
                <p>Contato:</p>
                <strong>{consulta.profissional.telefone}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
