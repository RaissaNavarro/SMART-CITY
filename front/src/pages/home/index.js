import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <header className="cabecalho">
      <div className="titlenav">
        <div className="sensores">
          <p>Temperatura</p>
          <p>Umidade</p>
          <p>Luminosidade</p>
          <p>Contador</p>
        </div>
        <div className="sing-in">
          <p onClick={() => navigate("/login")}>Login</p>
          <p onClick={() => navigate("/cadastrar")}>Cadastrar-se</p>
        </div>
      </div>
      <hr className="separator" />
      <section className="home-container">
        <div className="title">
          <h1>SENSORES UTILIZADOS</h1>
        </div>
        <div className="info-sensor">
          
        </div>
      </section>
    </header>
  );
};

export default Home;
