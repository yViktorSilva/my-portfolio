import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Adiciona os estilos dinamicamente
  useEffect(() => {
    const styles = `
      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2c3e50;
        padding: 30px 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
        box-sizing: border-box;
      }

      .logo h1 {
        font-size: 20px; /* Ajusta o tamanho da fonte */
        color: #fff;
        font-weight: bold;
        letter-spacing: 2px;
        margin: 0; /* Remove a margem padrão */
        line-height: 1.2; /* Ajusta o espaçamento entre as linhas */
      }

      .menu-button {
        font-size: 28px;
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        display: none;
      }

      .nav-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 20px;
      }

      .nav-list li {
        display: inline-block;
      }

      .nav-list a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        transition: color 0.3s ease;
        padding: 10px 15px;
      }

      @media (max-width: 768px) {
        .nav-list {
          display: none;
        }

        .menu-button {
          display: block;
        }

        .nav-list.open-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          top: 60px;
          right: 0;
          background-color: #2c3e50;
          width: 100%;
          padding: 20px 0;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          gap: 15px;
        }
      }

      @media (max-width: 480px) {
        .nav {
          padding: 10px 20px;
        }

        .logo h1 {
          font-size: 18px; /* Ajusta o tamanho da fonte em telas pequenas */
        }

        .menu-button {
          font-size: 24px;
        }

        .nav-list.open-menu {
          top: 50px;
        }
      }

      body {
        margin-top: 80px;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Cleanup para remover os estilos quando o componente for desmontado
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <h1>Victor Dev</h1>
      </div>

      <button
        className={`menu-button ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        &#9776;
      </button>

      <ul className={`nav-list ${isMenuOpen ? 'open-menu' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
