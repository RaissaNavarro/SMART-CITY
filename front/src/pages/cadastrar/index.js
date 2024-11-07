import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 


const Cadastrar = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // isso é o hook que faz o direcionamento

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/cadastrar/", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      // mensagem pra ver se deu certo
      setSuccessMessage("Deu certo!!.");
      setErrorMessage("Deu errado!!");
      
      // manda pra página de login
      setTimeout(() => navigate("/login"), 1000); 

    } catch (error) {
      setErrorMessage("Erro ao cadastrar usuário. Tente novamente.");
      setSuccessMessage("Deu certo !!");
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h3>SMART CITY</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          value={formData.username}
          onChange={handleChange} // o handleChange serve pra atualizar caso o input do usuario mude
          required
        />

        {/* coloquei o email só por colocar, não vai ser usado*/}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastrar;
