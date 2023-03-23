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
          className="w-full gap-12 p-10 bg-secondaryBrand-500 flex flex-col items-center  text-white">
            <div className="flex flex-col items-center gap-4 font-bold">
              <p className="text-3xl">Como Funciona?</p>
              <p className="text-xl">Muito simples!</p>
            </div>
            <div className="w-3/5 flex flex-col gap-14">
              <div className="w-full bg-primaryBrand-400 gap-10 h-max flex items-center text-white rounded-3xl">
                <div className="bg-primaryBrand-700  items-center  flex  justify-center pt-24 pr-20  rounded-3xl">
                  <p className=" font-bold text-4xl text-center ">1</p>
                </div>
                <div className="w-full flex flex-col items-center gap-5 p-7">
                  <p className="font-bold text-2xl text-center">Busca</p>
                  <p className="font-light text-xl tex-center">Busque por uma área e especialidade desejada</p>
                </div>
              </div>
              <div className="w-full bg-primaryBrand-400 gap-10 h-max flex items-center text-white rounded-3xl">
                <div className="bg-primaryBrand-700  items-center  flex justify-center pt-24 pr-20  rounded-3xl">
                  <p className=" font-bold text-4xl  text-center ">2</p>
                </div>
                <div className="w-full flex flex-col items-center gap-5 p-7">
                  <p className="font-bold text-2xl text-center">Agendamento</p>
                  <p className="font-light text-xl tex-center">Realize o agendamento com o profissional escolhido</p>
                </div>
              </div>
              <div className="w-full bg-primaryBrand-400 gap-10 h-max flex items-center text-white rounded-3xl">
                <div className="bg-primaryBrand-700  items-center  flex justify-center pt-24 pr-20 rounded-3xl">
                  <p className=" font-bold text-4xl text-center ">3</p>
                </div>
                <div className="w-full flex flex-col items-center gap-5 p-7">
                  <p className="font-bold text-2xl text-center">Consulta</p>
                  <p className="font-light text-xl tex-center">Compareça ao consultório na data e horário marcados</p>
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
