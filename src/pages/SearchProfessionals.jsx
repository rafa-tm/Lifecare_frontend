import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TextField from "../components/TextField";
import Button from "../components/Button";
import api from "../services/api";

import { MdMediation, MdMedicalInformation, MdSearch } from "react-icons/md";

export default function SearchProfessionals() {
  const [profissionais, setProfissionais] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroArea, setFiltroArea] = useState("");
  const [filtroEspec, setFiltroEspec] = useState("");

  useEffect(() => {
    async function getProfissionais() {
      const data = {
        nome: filtroNome,
        area: filtroArea,
        especialidade: filtroEspec,
      };
      await api.post("/filtrosProfissionais", data).then((response) => {
        setProfissionais(response.data);
        console.log(response.data);
      });
    }
    getProfissionais();
  }, [filtroNome, filtroArea, filtroEspec]);

  const styleLine = "flex flex-row w-full justify-between";

  return (
    <div>
      <NavBar type="back" />
      <div className="w-full flex flex-col justify-center">
        <div className="w-1/2 my-8 flex flex-col gap-4 items-center self-center">
          <TextField
            id="nome"
            placeholder="Digite o nome do profissional"
            type="text"
            size="full"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
            icon={<MdSearch size={24} />}
          />
          <div className="flex flex-row w-full gap-2 items-center">
            <p>Filtrar: </p>
            <TextField
              id="nome"
              placeholder="Filtrar por área"
              type="text"
              size="full"
              value={filtroArea}
              onChange={(e) => setFiltroArea(e.target.value)}
              icon={<MdMediation size={24} />}
            />
            <TextField
              id="nome"
              placeholder="Filtrar por especialidade"
              type="text"
              size="full"
              value={filtroEspec}
              onChange={(e) => setFiltroEspec(e.target.value)}
              icon={<MdMedicalInformation size={24} />}
            />
            <Button label="Filtrar" type="secondary" action="" />
          </div>
        </div>
        <div className="w-[90%] grid grid-cols-3 p-10 gap-2">
          {profissionais.length === 0 && (
            <p className="text-xl font-bold col-span-3">
              Nenhum profissional encontrado!
            </p>
          )}
          {profissionais.map((profissional) => (
            <div
              key={profissional.id}
              className="bg-white border-gray-200 border-2 shadow-lg flex flex-col gap-2 p-8 rounded-lg"
            >
              <div className={styleLine}>
                <p>Nome:</p>
                <strong>{profissional.nome}</strong>
              </div>
              <div className={styleLine}>
                <p>Area:</p>
                <strong>{profissional.area}</strong>
              </div>
              <div className={styleLine}>
                <p>Especialidade:</p>
                <strong>{profissional.especialidade}</strong>
              </div>
              <div className={styleLine}>
                <p>Contato:</p>
                <strong>{profissional.telefone}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
