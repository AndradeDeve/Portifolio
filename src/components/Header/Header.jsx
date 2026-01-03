import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">Guilherme Andrade da Silva</div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU */}
        <ul className={menuOpen ? "open" : ""}>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
           <li><a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologias</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
