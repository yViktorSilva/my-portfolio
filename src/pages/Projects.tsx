import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Projeto 1',
    description: 'Uma descrição breve do primeiro projeto.',
    link: 'https://github.com/seuusuario/projeto1',
  },
  {
    title: 'Projeto 2',
    description: 'Uma descrição breve do segundo projeto.',
    link: 'https://github.com/seuusuario/projeto2',
  },
  {
    title: 'Projeto 3',
    description: 'Uma descrição breve do terceiro projeto.',
    link: 'https://github.com/seuusuario/projeto3',
  },
];

const Projects: React.FC = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Meus Projetos</h2>
        <div style={projectsContainerStyle}>
          {projects.map((project, index) => (
            <div key={index} style={projectCardStyle}>
              <h3 style={projectTitleStyle}>{project.title}</h3>
              <p style={projectDescriptionStyle}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                Ver no GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Estilos inline para o componente de projetos
const sectionStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '50px 0',
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '30px',
};

const projectsContainerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
};

const projectCardStyle: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const projectTitleStyle: React.CSSProperties = {
  fontSize: '20px',
  marginBottom: '10px',
  color: '#333',
};

const projectDescriptionStyle: React.CSSProperties = {
  fontSize: '16px',
  marginBottom: '20px',
  color: '#666',
};

const linkStyle: React.CSSProperties = {
  color: '#0066cc',
  textDecoration: 'none',
  fontSize: '16px',
};

export default Projects;
