import { FaReact, FaAngular, FaPython, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiTypescript, SiMysql, SiGooglecloud, SiDotnet } from 'react-icons/si';

const About = () => {
  // Estilo para o container principal
  const containerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px",
      backgroundColor: "#343a40", // Fundo escuro para o container
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      maxWidth: "1000px",
      margin: "0 auto",
      color: "#f8f9fa", // Cor de texto clara para contraste
  };

  // Estilo para a tela
  const pageStyle = {
      background: "#121212", // Cor de fundo escuro para o modo dark
      minHeight: "100vh", // Garantir que ocupe toda a altura da tela
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
  };

  // Estilo do título
  const headingStyle = {
      color: "#ffffff", // Título branco
      fontSize: "2.5rem",
      fontWeight: "600",
      marginBottom: "30px",
      textAlign: "center",
      fontFamily: "'Courier New', monospace", // Fonte de linguagem de programação
  };

  // Estilo para as seções de sobre
  const sectionStyle = {
      width: "100%",
      backgroundColor: "#2c2f36", // Fundo dos cards mais escuro
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      fontFamily: "'Courier New', monospace", // Fonte de linguagem de programação
  };

  // Estilo para o subtítulo
  const subheadingStyle = {
      color: "#007bff", // Cor do subtítulo em azul
      fontSize: "1.75rem",
      marginBottom: "15px",
      fontWeight: "500",
  };

  // Estilo do parágrafo
  const paragraphStyle = {
      fontSize: "1.125rem",
      color: "#e1e1e1", // Cor clara para o texto
      lineHeight: "1.8",
      marginBottom: "15px",
  };

  // Estilo para a seção de ícones de tecnologia
  const techIconsStyle = {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "20px",
  };

  return (
      <div style={pageStyle}>
          <div style={containerStyle}>
              <h1 style={headingStyle}>Sobre Mim</h1>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Desenvolvimento Web e Full Stack
                  </h2>
                  <p style={paragraphStyle}>
                      Sou um desenvolvedor apaixonado por criar soluções eficientes e impactantes, com foco no
                      desenvolvimento de sistemas modernos. Tenho experiência sólida com JavaScript, TypeScript, Python
                      e .NET, com ênfase na construção de sistemas e APIs robustas.
                  </p>
                  <p style={paragraphStyle}>
                      Ao longo da minha carreira, tive a oportunidade de trabalhar com tecnologias como Django, Angular,
                      React, e SQL, além de ferramentas como Google Cloud Platform para integração de APIs e
                      desenvolvimento de sistemas escaláveis.
                  </p>
              </div>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Tecnologias que Eu Uso
                  </h2>
                  <div style={techIconsStyle}>
                      <FaReact size={40} color="#61dafb" />
                      <FaAngular size={40} color="#dd1b16" />
                      <DiDjango size={40} color="#092e20" />
                      <FaPython size={40} color="#3776ab" />
                      <SiTypescript size={40} color="#007acc" />
                      <FaJsSquare size={40} color="#f7df1e" />
                      <SiMysql size={40} color="#00758f" />
                      <SiGooglecloud size={40} color="#4285f4" />
                      <FaGitAlt size={40} color="#f34f29" />
                      <SiDotnet size={40} color="#512d6d" /> {/* Ícone do .NET */}
                  </div>
              </div>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Filosofia de Desenvolvimento
                  </h2>
                  <p style={paragraphStyle}>
                      Acredito que a melhor forma de desenvolver software é por meio de colaboração contínua e
                      aprendizado constante. Gosto de trabalhar em equipe e sempre busco otimizar processos e garantir
                      a qualidade do código, além de aplicar as melhores práticas de desenvolvimento ágil.
                  </p>
              </div>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Visão para o Futuro
                  </h2>
                  <p style={paragraphStyle}>
                      Estou sempre em busca de novos desafios que me permitam crescer como desenvolvedor e expandir
                      meus conhecimentos em novas tecnologias. Meu objetivo é me tornar um líder técnico, contribuindo
                      para o desenvolvimento de soluções inovadoras e ajudando a moldar o futuro das equipes de tecnologia.
                  </p>
              </div>
          </div>
      </div>
  );
};

export default About;
