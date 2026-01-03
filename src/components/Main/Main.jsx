import profile from "../../assets/Img_Port.png";
import "./Main.css";

export default function Hero() {
  return (
    <section id="sobre" className="hero">
      <div className="hero-content">

        <img
          src={profile}
          alt="Foto profissional de Guilherme"
          className="profile-img"
        />

        <div className="hero-text">
          <h1>Olá, eu sou Guilherme</h1>

          <p className="hero-stack">
            Analista de Sistemas Júnior |{" "}
            <span>C# • ASP.NET • SQL • React • JavaScript</span>
          </p>

          <p className="hero-about">
            Sou Analista de Sistemas Júnior na <strong>RecTask</strong>,
            atuando com <strong>C# e ASP.NET</strong>. Também desenvolvo
            sites e sistemas em projetos freelancers, sempre buscando
            boas práticas e soluções eficientes.
          </p>
        </div>

      </div>
    </section>
  );
}
