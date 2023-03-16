import Button from "../components/Button";
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
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
