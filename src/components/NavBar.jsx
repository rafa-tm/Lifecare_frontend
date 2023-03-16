import Button from "./Button";
import logo from "/Logotipo.svg";
import { Link } from "react-router-dom";
import { MdArrowBackIos, MdLogout, MdPeople } from "react-icons/md";

export default function NavBar({ type }) {
  switch (type) {
    case "home": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row p-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button label="Como funciona" type="text" link="#" action="" />
            <Button label="Especialidades" type="text" link="#" action="" />
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
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row p-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button
              label="Profissionais disponiveis"
              type="icon"
              icon="left"
              iconName={<MdPeople size={20} />}
              link="/bucaprofissionais"
              action=""
            />
            <Button
              label="Sair"
              type="icon"
              icon="right"
              iconName={<MdLogout size={20} />}
              link="/bucaprofissionais"
              action=""
            />
          </div>
        </div>
      );
    }
    case "profissional": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row p-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div className="flex flex-row gap-4">
            <Button
              label="Sair"
              type="icon"
              icon="right"
              iconName={<MdLogout size={20} />}
              link="/bucaprofissionais"
              action=""
            />
          </div>
        </div>
      );
    }
    case "back": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row px-8 py-4 justify-between items-center">
          <Link to="/" className="p-4">
            <MdArrowBackIos color="white" size={24} />
          </Link>
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
