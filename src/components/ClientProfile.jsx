import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import NavBar from "./NavBar";

export default function ClientProfile() {
  const [user, setUser] = useState("");
  const history = useNavigate();
  const tokenUser = localStorage.getItem("token");

  useEffect(() => {
    async function getUser() {
      const data = { token: tokenUser };
      const response = await api.post("verificalogin", data);
      setUser(response.data.user);
    }
    getUser();
  }, []);

  async function handleLogout() {
    localStorage.clear();
    history("/");
  }

  return (
    <div>
      <NavBar type="client" action={() => handleLogout()} />
      <div>
        <div>
          <p>Olá {user.nome} ,</p>
          <p>Confira suas consultas marcadas</p>
        </div>
      </div>
    </div>
  );
}
