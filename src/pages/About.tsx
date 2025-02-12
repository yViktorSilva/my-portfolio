import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaPython, FaGithub, FaDatabase, FaCogs, FaAngular } from 'react-icons/fa';
import { SiTypescript, SiDjango, SiGooglecloud, SiDotnet } from 'react-icons/si';

const About: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Sobre Mim</h2>
        <p style={introStyle}>
          Sou <strong>Desenvolvedor Full Stack</strong> com 3 anos de experiência, focado em criar soluções que realmente funcionam. Tenho habilidades em <strong>JavaScript, Python</strong> e <strong>C#</strong>, além de experiência com frameworks como <strong>Django</strong> e <strong>.NET</strong> para o back-end, e <strong>Angular</strong> e <strong>React</strong> para o front-end, o que me permite construir aplicações web práticas e eficientes.
        </p>
        <p style={textStyle}>
          Também trabalho com integração de APIs, sempre buscando melhorar a experiência do usuário. Costumo seguir boas práticas como <strong>TDD (Desenvolvimento Orientado a Testes)</strong>, garantindo que o código seja de qualidade desde o começo. Meu objetivo é entregar soluções simples, eficientes e que atendam bem às necessidades de quem vai usar.
        </p>
        
        {/* Seção de Linguagens de Programação */}
        <div style={skillsContainerStyle}>
          <h3 style={skillsHeadingStyle}>Linguagens de Programação</h3>
          <ul style={skillsListStyle}>
            <li style={skillItemStyle}><FaJs size={24} style={iconStyle} /> JavaScript</li>
            <li style={skillItemStyle}><SiTypescript size={24} style={iconStyle} /> TypeScript</li>
            <li style={skillItemStyle}><FaPython size={24} style={iconStyle} /> Python</li>
            <li style={skillItemStyle}><FaCogs size={24} style={iconStyle} /> C#</li> {/* Usando o ícone de configuração para C# */}
          </ul>
        </div>

        {/* Seção de Frameworks */}
        <div style={skillsContainerStyle}>
          <h3 style={skillsHeadingStyle}>Frameworks & Ferramentas</h3>
          <ul style={skillsListStyle}>
            <li style={skillItemStyle}><FaReact size={24} style={iconStyle} /> React / Redux</li>
            <li style={skillItemStyle}><FaAngular size={24} style={iconStyle} /> Angular</li>
            <li style={skillItemStyle}><FaNodeJs size={24} style={iconStyle} /> Node.js</li> {/* Ícone do Node.js */}
            <li style={skillItemStyle}><SiDjango size={24} style={iconStyle} /> Django</li>
            <li style={skillItemStyle}><SiDotnet size={24} style={iconStyle} /> .NET</li>
            <li style={skillItemStyle}><SiGooglecloud size={24} style={iconStyle} /> GCP</li>
            <li style={skillItemStyle}><FaGithub size={24} style={iconStyle} /> Git / GitHub</li>
            <li style={skillItemStyle}><FaDatabase size={24} style={iconStyle} /> SQL / NoSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Estilos refinados para o componente 'Sobre'
const sectionStyle: React.CSSProperties = {
  background: 'linear-gradient(to bottom, #00c6ff, #0072ff)', // Gradiente azul suave
  color: '#fff',
  minHeight: '100vh', // Preenche toda a altura da tela
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centraliza o conteúdo verticalmente
  padding: '0 20px',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 20px',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontSize: '36px',
  marginBottom: '40px',
  color: '#fff',
  fontWeight: '600',
};

const introStyle: React.CSSProperties = {
  fontSize: '20px',
  marginBottom: '20px',
  lineHeight: '1.8',
  fontWeight: '500',
  fontFamily: "'Courier New', Courier, monospace",
};

const textStyle: React.CSSProperties = {
  fontSize: '18px',
  marginBottom: '25px',
  lineHeight: '1.8',
  fontFamily: "'Courier New', Courier, monospace",
};

const skillsContainerStyle: React.CSSProperties = {
  marginTop: '50px',
  textAlign: 'left',
  fontSize: '18px',
};

const skillsHeadingStyle: React.CSSProperties = {
  fontSize: '26px',
  marginBottom: '15px',
  color: '#fff',
  fontWeight: '600',
};

const skillsListStyle: React.CSSProperties = {
  listStyleType: 'none',
  paddingLeft: '0',
  fontSize: '18px',
  marginBottom: '40px',
};

const skillItemStyle: React.CSSProperties = {
  fontSize: '18px',
  color: '#fff',
  marginBottom: '12px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle: React.CSSProperties = {
  marginRight: '10px',
  color: '#fff', // Cor do ícone
};

export default About;
