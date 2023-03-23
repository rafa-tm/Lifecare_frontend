import { useRef } from "react";
import Button from "../components/Button";
import logo from "/Logotipo.svg";
import NavBar from "../components/NavBar";
import imgsession1 from "/Doctors_amico.svg";

export default function Home() {
  const comoFunciona = useRef(null);
  const especialidades = useRef(null);

  const handleScrollView = (ref) => {
    ref.current && ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar
        type="home"
        action={() => handleScrollView(comoFunciona)}
        action2={() => handleScrollView(especialidades)}
      />
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-full justify-center my-32 gap-10 sm:flex-row">
          <div className="flex flex-col w-full gap-4 items-center sm:w-1/2">
            <p className=" w-2/3 font-bold text-xl text-center xl:w-full lg:text-3xl md:text-2xl sm:2xl ">
              Agende sua consulta agora mesmo!
            </p>
            <p className="w-5/6 text-sm text-center md:text-base lg:text-xl sm:w-2/3 ">
              Em nosso sistema você encontra uma infinidade de profissionais de
              diversas áreas e especialidades para que você o melhor cuidado.
            </p>
            <Button label="Ver Especialidades" type="primary" link="#" />
          </div>
          <img
            src={imgsession1}
            alt="Médicos de diversas habilidades"
            className=" w-2/5 max-w-md lg:max-w-md "
          />
        </div>

        {/*como funciona*/}
        <div
          ref={comoFunciona}
          className="w-full h-min bg-secondaryBrand-500 flex flex-col items-center text-white">
          <p className="font-bold text-2xl text-center mt-10">Como funciona?</p>
          <p className="font-bold text-lg text-center">É muito Simples!</p>

          <div className="w-full h-min bg-secondaryBrand-500 flex flex-col items-center my-5 text-white">
            <div className="bg-primaryBrand-400 flex flex-row rounded-md items-center justify-evenly">
              <div>
                <p className="rounded-md bg-primaryBrand-700 py-10 px-10">1</p>
              </div>
              <div className="w-3/6 rounded-md  flex flex-col text-xl text-center px-8">
                <p className="font-bold text-2xl text-center">Busca</p>
                <p>Busque por uma área e especialidade desejada</p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center">
              <div>
                <p className="rounded-md bg-primaryBrand-700 py-10 px-10">2</p>
              </div>
              <div className="w-3/6 rounded-md bg-primaryBrand-400 flex flex-col  text-xl  my-5 text-center">
                <p className="font-bold text-2xl text-center my-3">
                  Agendamento
                </p>
                <p className="my-3">
                  Realize o agendamento com o profissional escolhido
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-center">
              <div>
                <p className="rounded-md bg-primaryBrand-700 py-10 px-10">3</p>
              </div>
              <div className="w-3/6 rounded-md bg-primaryBrand-400 flex flex-col  text-xl  my-5  text-center">
                <p className="font-bold text-2xl text-center my-3">Consulta</p>
                <p className="my-3">
                  Compareça ao consultório na data e horário marcados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*footer*/}
        <div className="w-full h-min bg-primaryBrand-400 flex flex-row py-10 px-6 justify-evenly items-center text-white text-sm
         xl:text-lg lg:text-xl sm:text-base">
          <div>
            <img src={logo} alt="Logotipo LifeCare" className="w-4/6 lg:w-full sm:5/6" />
          </div>
          <div className="flex flex-col gap-1  ">
            <p className="font-bold">Privacidade</p>
            <div className=" flex flex-col gap-1">
              <p>Política de cookies</p>
              <p>Política de Privacidade</p>
              <p>Termos de Uso</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <p className="font-bold">00.000.0000/0001-00</p>
            <div className="flex flex-col gap-1">
            <p>Rod. Washington Luiz, s/n - Monjolinho</p>
            <p>São Carlos - SP</p>
            <p>LifeCare®</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
