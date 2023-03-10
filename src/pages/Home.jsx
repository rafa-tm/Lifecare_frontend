import Button from "../components/Button";
import TextField from "../components/TextField";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar type="back" />
      <div className="flex gap-4 bg-black">
        <Button label="Teste" type="primary" action="profile" />
        <Button label="Teste" type="secondary" link="profile" />
        <Button label="Teste" type="tertiary" link="profile" />
        <Button label="Teste" type="text" link="profile" />
      </div>
      <div className="flex flex-col gap-4">
        <TextField
          id="email"
          placeholder="aaa"
          label="Email"
          type="text"
          size="half"
          onChange=""
        />
      </div>
    </div>
  );
}
