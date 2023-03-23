import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SearchProfessionals from "./pages/SearchProfessionals";
import Scheduling from "./pages/Scheduling";

import Teste from "./pages/Teste";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="buscaprofissionais" element={<SearchProfessionals />} />
          <Route path="agendar/:id" element={<Scheduling />} />
          <Route path="teste" element={<Teste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
