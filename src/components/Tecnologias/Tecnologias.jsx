import { tecnologias } from "./Data/Tecnologias.js";
import Tecnologia from "./Tecnologia.jsx";

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="tecnologias container">
      <h2>Tecnologias:</h2>
      <br/>
      <div className="projects-grid">
        {tecnologias.map((tecnologia, index) => (
            <Tecnologia
              key={index}
              tecnologia={tecnologia}
              index={index}
            />
          ))}

      </div>
    </section>
  );
}
