import "./Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>

      <p className="contato-texto">
        Estou aberto a oportunidades como Analista de Sistemas Júnior,
        projetos freelancers e colaborações. Se quiser falar sobre uma
        vaga, projeto ou tirar alguma dúvida, é só me chamar.
      </p>

      <div className="contato-links">
        <a href="mailto:andrade171120@email.com">
          📧 Email
        </a>

        <a href="https://www.linkedin.com/in/guilherme-andrade-38684731b/" target="_blank">
          💼 LinkedIn
        </a>

        <a href="https://github.com/AndradeDeve" target="_blank">
          💻 GitHub
        </a>

        <a href="https://wa.me/11964695847" target="_blank">
          📱 WhatsApp
        </a>
      </div>
    </section>
  );
}
