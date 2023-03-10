import Button from "./Button";
import logo from "/Logotipo.svg";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

export default function NavBar({ type }) {
  switch (type) {
    case "home": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row p-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div>
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
          <div>
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
    case "profissional": {
      return (
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row p-4 justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </Link>
          <div>
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
