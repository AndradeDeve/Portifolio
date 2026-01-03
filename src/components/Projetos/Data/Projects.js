import Anamtec from "../../../assets/projetos/Anamtec.png";
import Biblioteca from "../../../assets/projetos/Biblioteca.png";
import RedeSocial from "../../../assets/projetos/RedeSocial.png";
export const projects = [
  {
    title: "🩺 Anamtec — Sistema de Anamnese Educacional",
    description: "Sistema web desenvolvido para apoiar a coleta de dados de anamnese de professores, utilizado em pesquisa de campo (TCC). A aplicação permite o registro estruturado das informações, garantindo organização, confiabilidade dos dados e facilidade de análise para fins educacionais.",
    image: Anamtec,
    tecnologias: ["JavaScript", "React", "Node.js","Express", "Sql"],
    code: "https://github.com/AndradeDeve/AnamTec"
  },
  {
    title: "💬 Rede Social em Tempo Real",
    description: "Aplicação de rede social com comunicação em tempo real, permitindo troca instantânea de mensagens entre usuários. O sistema utiliza WebSockets para atualização imediata das interações e Firebase para autenticação e armazenamento de dados.",
    image: RedeSocial,
    tecnologias: ["JavaScript","Socket.IO", "Firebase ", "HTML", "CSS"],
    code: "https://github.com/AndradeDeve/bd3-atv-rede-social-Guilherme-Andrade"
  },
  {
    title: "📚 Sistema de Gerenciamento de Biblioteca",
    description: "Sistema web desenvolvido para o gerenciamento de entrada e saída de pessoas em uma biblioteca, permitindo o registro de usuários, controle de acessos e acompanhamento do fluxo de utilização do espaço. O projeto tem como foco organização, segurança e apoio à gestão do ambiente.",
    tecnologias: ["JavaScript", "React", "Node.js", "Express", "Firebase"],
    image: Biblioteca,
    code: "https://github.com/AndradeDeve/Gerenciamento_Biblioteca"
  }
];
