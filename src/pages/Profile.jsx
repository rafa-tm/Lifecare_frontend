import api from "../services/api";
import { useState } from "react";
import ClientProfile from "../components/ClientProfile";
import ProfessionalProfile from "../components/ProfessionalProfile";

export default function Profile() {
  const tipoUsuario = localStorage.getItem("type");

  switch (tipoUsuario) {
    case "cliente":
      return (
        <div>
          <ClientProfile />
        </div>
      );
    case "profissional":
      return (
        <div>
          <ProfessionalProfile />;
        </div>
      );
    default:
      return;
  }
}
