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
      });
    }
    getProfissionais();
  }, [filtroNome, filtroArea, filtroEspec]);

  function clearFilters() {
    setFiltroNome("");
    setFiltroArea("");
    setFiltroEspec("");
  }

  const styleLine = "flex flex-row w-full justify-between";

  return (
    <div>
      <NavBar type="back" />
      <div className="w-full flex flex-col items-center">
        <div className="w-[95%] max-w-2xl my-8 flex flex-col gap-4 items-center self-center">
          <TextField
            id="nome"
            placeholder="Digite o nome do profissional"
            type="text"
            size="full"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
            icon={<MdSearch size={24} />}
          />
          <div className="flex flex-col w-full gap-2 items-center lg:flex-row">
            <p>Filtrar: </p>
            <TextField
              id="nome"
              placeholder="Área"
              type="text"
              size="full"
              value={filtroArea}
              onChange={(e) => setFiltroArea(e.target.value)}
              icon={<MdMediation size={24} />}
            />
            <TextField
              id="nome"
              placeholder="Especialidade"
              type="text"
              size="full"
              value={filtroEspec}
              onChange={(e) => setFiltroEspec(e.target.value)}
              icon={<MdMedicalInformation size={24} />}
            />
            <Button label="Limpar" type="secondary" action={clearFilters} />
          </div>
        </div>
        <div className="w-[90%] grid grid-cols-1 gap-4 items-center md:grid-cols-2 xl:grid-cols-3 2xl:gap-8">
          {profissionais.length === 0 && (
            <div className="text-xl text-center font-bold w-full my-24 md:col-span-2 xl:col-span-3">
              <p>Nenhum profissional encontrado!</p>
            </div>
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
