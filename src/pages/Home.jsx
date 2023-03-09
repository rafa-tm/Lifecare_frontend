import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <div className="flex gap-4">
        <Button label="Teste" type="primary" action="profile" />
        <Button label="Teste" type="secondary" link="profile" />
        <Button label="Teste" type="tertiary" link="profile" />
      </div>
    </div>
  );
}
