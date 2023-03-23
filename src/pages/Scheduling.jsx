import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import api from "../services/api";

export default function Scheduling() {
  const [profissional, setProfissional] = useState({});
  const [hasError, setHasError] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const history = useNavigate();

  useEffect(() => {
    async function getProfissional() {
      const id = window.location.pathname.split("/")[2];
      await api.get(`/profissionais/${id}`).then((response) => {
        setProfissional(response.data);
      });
    }

    function getDataAtual() {
      const data = new Date();
      let dia = data.getDate();
      let mes = data.getMonth() + 1;
      let ano = data.getFullYear();
      if (mes < 10) {
        mes = `0${mes}`;
      }
      const dataFinal = `${ano}-${mes}-${dia}`;
      setDataAtual(dataFinal);
      console.log(dataAtual);
    }
    getProfissional();
    getDataAtual();
  }, []);

  async function handleConsulta(e) {
    e.preventDefault();
    try {
      const clienteId = localStorage.getItem("token");
      const profissionalId = profissional.id;
      const dataConsulta = document.getElementById("data").value;
      const hora = document.getElementById("hora").value;
      const estado = true;

      const data = {
        clienteId: clienteId,
        profissionalId: profissionalId,
        data: dataConsulta,
        hora: hora,
        estado: estado,
      };

      await api.post("consultas", data).then((response) => {
        if (response.status === 200) {
          history("/profile");
        }
      });
    } catch (err) {
      setHasError(err.response.data.erro);
    }
  }

  const styleLine = "flex flex-row w-full justify-between";
  const styleInput =
    "flex flex-row gap-2 text-md w-full p-2 rounded-lg border-2 border-primaryBrand-300 focus:border-primaryBrand-400";

  return (
    <div>
      <NavBar type="back" />
      <div className="w-full flex flex-col items-center my-8 px-6">
        <p className="text-xl font-semibold">
          Agendar consulta com o profissional:
        </p>
        <div className="w-[95%] max-w-2xl my-8 flex flex-col gap-4">
          <div className={styleLine}>
            <p>Profissional:</p>
            <strong>{profissional.nome}</strong>
          </div>
          <div className={styleLine}>
            <p>Area:</p>
            <strong>{profissional.area}</strong>
          </div>
          <div className={styleLine}>
            <p>Esaecialidade:</p>
            <strong>{profissional.especialidade}</strong>
          </div>
          <div className="flex flex-row w-full justify-between">
            <p>Contato:</p>
            <div className="flex flex-col text-right">
              <strong>{profissional.telefone}</strong>
              <strong>{profissional.email}</strong>
            </div>
          </div>
        </div>
        <div className="w-[95%] max-w-2xl my-8 flex flex-col gap-4 items-center text-left justify-between md:flex-row md:items-stretch ">
          <p className="text-xl font-bold text-center">
            Selecione uma data e um horario desejado para a consulta:
          </p>
          <form
            onSubmit={handleConsulta}
            className="flex flex-col gap-4 w-[80%] max-w-xs items-center"
          >
            <input
              className={styleInput}
              id="data"
              type="date"
              min={dataAtual}
              required
            />
            <input
              className={styleInput}
              id="hora"
              type="time"
              min="08:00"
              max="18:00"
              required
            />
            <div>
              <p>{hasError}</p>
            </div>
            <Button label="Agendar consulta" type="primary" action="" />
          </form>
        </div>
      </div>
    </div>
  );
}
