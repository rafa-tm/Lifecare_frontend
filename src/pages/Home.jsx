import { useRef } from "react";
import Button from "../components/Button";
import logo from "/Logotipo.svg";
import NavBar from "../components/NavBar";
import imgsession1 from "/Doctors_amico.svg";
import cardio from "/Cardiologist-pana.png";
import gineco from "/Gynecology consultation-pana.png";
import oftalmo from "/Ophthalmologist-pana.png";
import pediatra from "/Pediatrician-pana.png"


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
            <Button label="Ver Especialidades" type="primary" action={() => handleScrollView(especialidades)}/>
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
            <div className="flex flex-col items-center gap-1 sm:gap-4 font-bold">
              <p className="text-2xl sm:text-3xl">Como Funciona?</p>
              <p className="text-lg sm:text-xl">Muito simples!</p>
            </div>
            <div className=" w-4/5 flex flex-col gap-12 lg:gap-14 lg:w-3/5">
              <div className="w-full bg-primaryBrand-400 gap-0 sm:gap-10 h-max flex flex-col items-center text-white shadow-lg shadow-secondaryBrand-700 rounded-2xl sm:flex-row">
                <div className="bg-primaryBrand-700  items-center w-[70px] sm:w-28 min-[570px]:w-[80px] min-[570px]:py-6  rounded-full sm:rounded-2xl py-5 -mt-8 sm:mt-0 sm:py-12 ">
                  <p className="font-bold text-xl text-center sm:text-4xl">1</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center py-5 sm:py-0 gap-3 sm:gap-5">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl text-center">Busca</p>
                  <p className="font-light text-sm min-[570px]:text-base sm:text-lg md:text-xl text-center px-2">Busque por uma área e especialidade desejada</p>
                </div>
              </div>
              <div className="w-full bg-primaryBrand-400 gap-0 sm:gap-10 h-max flex flex-col items-center text-white shadow-lg shadow-secondaryBrand-700 rounded-2xl sm:flex-row">
                <div className="bg-primaryBrand-700  items-center w-[70px] sm:w-28 min-[570px]:w-[80px] min-[570px]:py-6  rounded-full sm:rounded-2xl py-5 -mt-8 sm:mt-0 sm:py-12">
                  <p className=" font-bold text-xl text-center sm:text-4xl">2</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center py-5 sm:py-0 gap-3 sm:gap-5">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl text-center">Agendamento</p>
                  <p className="font-light text-sm min-[570px]:text-base sm:text-lg md:text-xl text-center px-2">Realize o agendamento com o profissional escolhido</p>
                </div>
              </div>
              <div className="w-full bg-primaryBrand-400 gap-0 sm:gap-10 h-max flex flex-col items-center text-white shadow-lg shadow-secondaryBrand-700 rounded-2xl sm:flex-row">
                <div className="bg-primaryBrand-700  items-center w-[70px] sm:w-28 min-[570px]:w-[80px] min-[570px]:py-6  rounded-full sm:rounded-2xl py-5 -mt-8 sm:mt-0 sm:py-12">
                  <p className=" font-bold text-xl text-center sm:text-4xl">3</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center py-5 sm:py-0 gap-3 sm:gap-5">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl text-center">Consulta</p>
                  <p className="font-light text-sm min-[570px]:text-base sm:text-lg md:text-xl text-center px-2">Compareça ao consultório na data e horário marcados</p>
                </div>
              </div>
            </div>
        </div>

        {/*especialidades*/}
        <div ref={especialidades} className="w-full flex flex-col gap-16 py-20">
          <p className="text-center text-2xl font-bold px-5 ">Algumas das especialidades dos profissionais cadastrados em nosso sistema</p>
          <div className="w-full  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-28 px-20"> 
            <img src={cardio} alt="Cardiologista" className="w-full max-w-xs min-w-[180px]   py-5 border shadow-lg shadow-gray-400 rounded-xl"/>
            <img src={gineco} alt="Ginecologista" className="w-full max-w-xs min-w-[180px] py-5 border shadow-lg shadow-gray-400 rounded-xl"/>
            <img src={oftalmo} alt="Oftalmologista" className="w-full justify-center max-w-xs min-w-[180px] py-5 border shadow-lg shadow-gray-400 rounded-xl"/>
            <img src={pediatra} alt="Pediatra" className="w-full max-w-xs min-w-[180px]  py-5 border shadow-lg shadow-gray-400 rounded-xl"/>
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
