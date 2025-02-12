import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para uma API ou servidor
    console.log('Formulário enviado:', formData);
    // Resetar o formulário após envio
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Entre em Contato</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="email" style={labelStyle}>E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="message" style={labelStyle}>Mensagem:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>Enviar</button>
        </form>
      </div>
    </section>
  );
};

// Estilos inline para o formulário de contato
const sectionStyle: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  padding: '50px 0',
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '20px',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const labelStyle: React.CSSProperties = {
  fontSize: '16px',
  marginBottom: '5px',
};

const inputStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  maxWidth: '400px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle: React.CSSProperties = {
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  maxWidth: '400px',
  height: '150px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Contact;
