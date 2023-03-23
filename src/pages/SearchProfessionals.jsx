import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TextField from "../components/TextField";
import Button from "../components/Button";
import api from "../services/api";

import {
  MdLocationOn,
  MdLocationPin,
  MdMediation,
  MdMedicalInformation,
  MdSearch,
} from "react-icons/md";

export default function SearchProfessionals() {
  const [profissionais, setProfissionais] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroArea, setFiltroArea] = useState("");
  const [filtroEspec, setFiltroEspec] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");

  useEffect(() => {
    async function getProfissionais() {
      const data = {
        nome: filtroNome,
        area: filtroArea,
        especialidade: filtroEspec,
        cidade: filtroCidade,
      };
      await api.post("/filtrosProfissionais", data).then((response) => {
        setProfissionais(response.data);
      });
    }
    getProfissionais();
  }, [filtroNome, filtroArea, filtroEspec, filtroCidade]);

  function searchCity() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const params = {
            auth: "881130808767206559393x57374",
            locate: `${position.coords.latitude},${position.coords.longitude}`,
            json: "1",
          };
          await api.get("https://geocode.xyz", { params }).then((response) => {
            setFiltroCidade(response.data.city);
          });
        },
        errorPosition,
        {
          enableHighAccuracy: true,
        }
      );
    }
  }

  function errorPosition(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Permissão negada para a localização.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Informação da localizxação é indefinida.");
        break;
      case error.TIMEOUT:
        alert("Timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Ocorreu um erro desconhecido.");
        break;
    }
  }

  function clearFilters() {
    setFiltroNome("");
    setFiltroArea("");
    setFiltroEspec("");
    setFiltroCidade("");
  }

  function agendar(e, id) {
    e.preventDefault();
    return () => {
      window.location.href = `/agendar/${id}`;
    };
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
          <div className="w-full flex flex-row justify-evenly items-center">
            <TextField
              id="nome"
              placeholder="Digite uma cidade"
              type="text"
              size="half"
              value={filtroCidade}
              onChange={(e) => setFiltroCidade(e.target.value)}
              icon={<MdLocationPin size={24} />}
            />
            <Button
              label="Buscar automáticamente por localização"
              type="tertiary"
              action={searchCity}
            />
          </div>
          <div className="flex flex-col w-full gap-2 items-center lg:flex-row">
            <TextField
              id="nome"
              placeholder="Área"
              type="text"
              size="half"
              value={filtroArea}
              onChange={(e) => setFiltroArea(e.target.value)}
              icon={<MdMediation size={24} />}
            />
            <TextField
              id="nome"
              placeholder="Especialidade"
              type="text"
              size="half"
              value={filtroEspec}
              onChange={(e) => setFiltroEspec(e.target.value)}
              icon={<MdMedicalInformation size={24} />}
            />
            <Button label="Limpar" type="tertiary" action={clearFilters} />
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
              className="bg-white border-gray-200 border-2 items-center shadow-lg flex flex-col gap-2 p-8 rounded-lg"
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
              <div className={styleLine}>
                <p>Localização:</p>
                <strong>{profissional.cidade}</strong>
              </div>
              <Button
                label="Agendar"
                type="secondary"
                action={(e) => {
                  e.preventDefault();
                  window.location.href = `/agendar/${profissional.id}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
