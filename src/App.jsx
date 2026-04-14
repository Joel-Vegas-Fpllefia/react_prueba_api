import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [equipos, setEquipos] = useState([]);

  async function leerEquipos() {
    const ruta = "http://localhost:3000/api/equipos";
    const equiposJson = await fetch(ruta);
    const equipos = await equiposJson.json();
    setEquipos(equipos);
  }
  useEffect(() => {
    console.log("useEddect");
    leerEquipos();
  }, {});
  return (
    <div>
      <h1>Equipos</h1>
      <p>{JSON.stringify(equipos.equipos)}</p>
    </div>
  );
}

export default App;
