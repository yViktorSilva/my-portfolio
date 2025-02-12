const Experience = () => {
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

  // Estilo para as seções de experiência
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

  // Estilo para a lista
  const listStyle = {
      marginLeft: "20px",
      fontSize: "1.125rem",
      color: "#e1e1e1", // Cor clara para os itens da lista
      listStyleType: "circle",
  };

  return (
      <div style={pageStyle}>
          <div style={containerStyle}>
              <h1 style={headingStyle}>Experiência Profissional</h1>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Desenvolvedor Full Stack Júnior | Simbiose Ventures | 11/2021 – 04/2022
                  </h2>
                  <p style={paragraphStyle}>
                      Contribuí ativamente para o desenvolvimento contínuo de um sistema inovador de fisioterapia online
                      e um sistema low code, atuando como Desenvolvedor Full Stack Júnior.
                  </p>
                  <p style={paragraphStyle}>
                      Durante minha atuação, fui encarregado de:
                  </p>
                  <ul style={listStyle}>
                      <li>Criar e implementar novas funcionalidades para o sistema.</li>
                      <li>Trabalhar com frontend utilizando JavaScript, HTML e CSS, e backend com Django e MySQL.</li>
                      <li>Integrar APIs internas e externas para garantir uma interação fluida entre diferentes componentes.</li>
                      <li>Revisar e aprimorar o código, priorizando a qualidade e manutenção.</li>
                  </ul>
              </div>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Desenvolvedor Full Stack | Orion Consultoria em TI | 02/2020 – 10/2023
                  </h2>
                  <p style={paragraphStyle}>
                      Trabalhei em diversos projetos de sistemas e, no último projeto, fui responsável pelo desenvolvimento
                      de um sistema de gerenciamento de bibliotecas. Utilizei Angular no frontend e Django no backend.
                  </p>
                  <p style={paragraphStyle}>
                      Minhas responsabilidades incluíram:
                  </p>
                  <ul style={listStyle}>
                      <li>Desenvolver e implementar novas funcionalidades em sistemas diversos.</li>
                      <li>Desenvolver o frontend utilizando Angular e o backend com Django e MySQL.</li>
                      <li>Atuar como mentor técnico, orientando desenvolvedores juniores.</li>
                      <li>Garantir a qualidade técnica do código por meio de revisões e programação em par.</li>
                      <li>Integrar sistemas de diferentes segmentos e criar soluções escaláveis e eficientes.</li>
                  </ul>
              </div>

              <div style={sectionStyle}>
                  <h2 style={subheadingStyle}>
                      Desenvolvedor Full Stack de Chatbots | Colmeia Consultoria e Representação Comercial LTDA | 10/2023 - Presente
                  </h2>
                  <p style={paragraphStyle}>
                      Sou responsável pelo desenvolvimento de chatbots utilizando TypeScript e Google Cloud Platform (GCP)
                      para integração e hospedagem. Trabalho também com .NET 6 para desenvolver as rotas de API.
                  </p>
                  <p style={paragraphStyle}>
                      Entre minhas principais responsabilidades, estão:
                  </p>
                  <ul style={listStyle}>
                      <li>Desenvolver APIs que ampliam as funcionalidades dos chatbots.</li>
                      <li>Melhorar o desempenho e a confiabilidade do sistema, criando soluções internas.</li>
                      <li>Gerenciar bancos de dados utilizando SQL para otimizar o armazenamento e acesso às informações.</li>
                  </ul>
              </div>
          </div>
      </div>
  );
};

export default Experience;
