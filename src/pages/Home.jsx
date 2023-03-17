import Button from "../components/Button";
import logo from "/Logotipo.svg";
import TextField from "../components/TextField";
import NavBar from "../components/NavBar";
import imgsession1 from "/Doctors_amico.svg";

export default function Home() {
  return (
    <div>
      <NavBar type="home" />
      <div className="flex flex-col">
        <div className="flex flex-row items-center w-full justify-center my-32 gap-36">
          <div className="flex flex-col w-3/12 gap-4 items-center">
            <p className="font-bold text-xl text-center">
              Agende sua consulta agora mesmo!
            </p>
            <p className="text-lg text-center">
              Em nosso sistema você encontra uma infinidade de profissionais de
              diversas áreas e especialidades para que você o melhor cuidado.
            </p>
            <Button label="Ver Especialidades" type="primary" link="#" />
          </div>
          <img
            src={imgsession1}
            alt="Médicos de diversas habilidades"
            className="max-w-lg"
          />
        </div>
        {/*footer*/}
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row py-10 px-6 justify-between items-center text-white">
          <div>
           <img src={logo} alt="Logotipo LifeCare" className="w-5/6" />
          </div>
           <div className="flex flex-col gap-1  ">
           <p className="font-bold text-xl">
              Privacidade
            </p>
            <div className=" flex flex-col gap-1">
              <p>Política de cookies</p>
              <p>Política de Privacidade</p>
              <p>Termos de Uso</p>
            </div>
           </div>
           <div className="flex flex-col gap-1  ">
            <p className="font-bold text-xl">
              00.000.0000/0001-00
            </p>
            <p>Rod. Washington Luiz, s/n - Monjolinho</p>
            <p>São Carlos - SP</p>
            <p>LifeCare®</p>
           </div>
        </div>
      </div>
    </div>
  );
}
