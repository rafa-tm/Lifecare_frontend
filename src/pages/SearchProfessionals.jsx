import React from "react";
import NavBar from "../components/NavBar";
import TextField from "../components/TextField";
import Button from "../components/Button";

import { MdMediation, MdMedicalInformation, MdSearch } from "react-icons/md";

export default function SearchProfessionals() {
  return (
    <div>
      <NavBar type="back" />
      <div className="w-full flex justify-center">
        <div className="w-1/2 my-8 flex flex-col gap-4 items-center self-center">
          <TextField
            id="nome"
            placeholder="Digite o nome do profissional"
            type="text"
            size="full"
            onChange=""
            icon={<MdSearch size={24} />}
          />
          <div className="flex flex-row w-full gap-2 items-center">
            <p>Filtrar: </p>
            <TextField
              id="nome"
              placeholder="Filtrar por área"
              type="text"
              size="full"
              onChange=""
              icon={<MdMediation size={24} />}
            />
            <TextField
              id="nome"
              placeholder="Filtrar por especialidade"
              type="text"
              size="full"
              onChange=""
              icon={<MdMedicalInformation size={24} />}
            />
            <Button label="Filtrar" type="secondary" action="" />
          </div>
        </div>
      </div>
    </div>
  );
}
