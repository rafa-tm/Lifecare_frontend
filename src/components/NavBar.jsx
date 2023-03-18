import Button from "./Button";
import logo from "/Logotipo.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdLogout, MdPeople } from "react-icons/md";

export default function NavBar({ type, action, action2 }) {
  const navigate = useNavigate();

  switch (type) {
    case "home": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row py-4 px-6 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button label="Como funciona" type="text" action={action} />
            <Button label="Especialidades" type="text" action={action2} />
            <Button
              label="Entrar ou Cadastrar"
              type="primary"
              link="login"
              action=""
            />
          </div>
        </div>
      );
    }
    case "client": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row py-4 px-6 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button
              label="Profissionais disponiveis"
              type="icon"
              icon="left"
              iconName={<MdPeople size={20} />}
              link="/buscaprofissionais"
              action=""
            />
            <Button
              label="Sair"
              type="icon"
              icon="right"
              iconName={<MdLogout size={20} />}
              action={action}
            />
          </div>
        </div>
      );
    }
    case "profissional": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row py-4 px-6 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button
              label="Sair"
              type="icon"
              icon="right"
              iconName={<MdLogout size={20} />}
              action={action}
            />
          </div>
        </div>
      );
    }
    case "back": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row px-8 py-4 justify-between items-center">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="p-4"
          >
            <MdArrowBackIos color="white" size={24} />
          </button>
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
        </div>
      );
    }
    default:
      throw "NavBar must be a type";
  }
}
