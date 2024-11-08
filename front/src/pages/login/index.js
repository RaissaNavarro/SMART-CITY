import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // chamando o css

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // hook direciona

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: formData.username,
        password: formData.password,
      });

      const { access, refresh } = response.data;

      // vai armazenar os tokens de acesso no localstorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      setSuccessMessage("Login realizado com sucesso!");
      setErrorMessage("");

      // vai levar pra página home
      navigate("/home");

    } catch (error) {
      setErrorMessage("Usuario errado");
      setSuccessMessage("Certo");
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h3>SMART CITY</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <input
          type="text"
          name="username"
          placeholder="Usuário"
          value={formData.username}
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
        <button type="submit">Entrar</button>
      </form>
      </div>
  );
};

export default Login;
