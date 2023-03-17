import { useEffect } from "react";
import api from "../services/api";

export default function ProfessionalProfile() {
  const [user, setUser] = useState("");
  /*
  useEffect(() => {
    async function getUser() {
      const tokenUser = localStorage.getItem("token");
      const response = await api.post("verificalogin", tokenUser);
      setUser(response.data);
    }
    getUser();
  }, []);
*/
  return <div>oi</div>;
}
