import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Bem-vindo ao meu Portfólio!</h1>
        <p style={introStyle}>
          Olá! Eu sou <strong>Victor Lima</strong>, um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Navegue pelo meu portfólio para conhecer mais sobre minha experiência, habilidades e projetos.
        </p>

        <div style={socialLinksContainerStyle}>
          <a href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/victor-lima-404ba41a1/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:v.silvalima.1996@gmail.com" style={linkStyle}>
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Estilos refinados para a página 'Home'
const sectionStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Preenche toda a altura da tela
  background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Gradiente suave
  color: '#fff',
  padding: '0 20px',
};

const contentContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  maxWidth: '900px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '48px',
  fontWeight: '700',
  marginBottom: '20px',
};

const introStyle: React.CSSProperties = {
    fontSize: '20px',
    marginBottom: '30px',
    lineHeight: '1.6',
    fontFamily: "'Courier New', Courier, monospace", // Fonte de programação
  };
  
const socialLinksContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

export default Home;
