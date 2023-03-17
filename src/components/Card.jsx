import { MdCancel } from "react-icons/md";
import Button from "./Button";

export default function Card({ type, labelButton, iconButton }) {
  const stylecommun =
    "bg-white shadow-lg w-1/4 flex flex-col gap-4 p-8 rounded-lg";
  const styleinfo =
    "bg-white shadow-lg w-1/4 flex flex-col gap-4 p-8 rounded-lg";

  return (
    <div className={stylecommun}>
      <div>
        <div className={styleinfo}>
          <p>Data da consulta</p>
          <strong>00/00/0000 às 00:00</strong>
        </div>
        <Button
          label="Cancelar consulta"
          type="icon"
          icon="left"
          iconName={<MdCancel size={20} />}
          link="/bucaprofissionais"
          action=""
        />
      </div>
    </div>
  );
}
