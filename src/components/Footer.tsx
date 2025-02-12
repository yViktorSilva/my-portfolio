import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>© 2025 Victor Lima. Todos os direitos reservados.</p>
        <div style={socialLinksStyle}>
          <a href="https://github.com/Viktor" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/viktor-lima" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

// Estilos inline para o footer
const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const textStyle: React.CSSProperties = {
  margin: '0',
  fontSize: '14px',
};

const socialLinksStyle: React.CSSProperties = {
  marginTop: '10px',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  fontSize: '16px',
};

export default Footer;
