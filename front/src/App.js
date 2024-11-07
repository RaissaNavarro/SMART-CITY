import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// as págs que vão exibir os dados do sql
import Temperatura from "./pages/temperatura/index"; 
import Umidade from "./pages/umidade/index"; 
import Luminosidade from "./pages/luminosidade/index"; 
import Contador from "./pages/contador/index"; 

import Cadastrar from "./pages/cadastrar"
import Login from "./pages/login/"

import Home from "./pages/home"; // pega a home aq

const App = () => {

  const [dadosTemperatura, setDadosTemperatura] = useState([]);
  const [dadosUmidade, setDadosUmidade] = useState([]);
  const [dadosLuminosidade, setDadosLuminosidade] = useState([]);
  const [dadosContador, setDadosContador] = useState([]);

  const getDadosTemperatura = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/sensores/temperatura'); // a porta é 3000
      setDadosTemperatura(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados de temperatura:", error);
    }
  };

  const getDadosUmidade = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/sensores/umidade');
      setDadosUmidade(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados de umidade:", error);
    }
  };

  const getDadosLuminosidade = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/sensores/luminosidade');
      setDadosLuminosidade(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados de luminosidade:", error);
    }
  };

  const getDadosContador = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/sensores/contador');
      setDadosContador(res.data);
    } catch (error) {
      console.error("Erro ao buscar dados de contador:", error);
    }
  };

  useEffect(() => {
    getDadosTemperatura();
    getDadosUmidade();
    getDadosLuminosidade();
    getDadosContador();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/temperatura" element={<Temperatura dados={dadosTemperatura} />} />
        <Route path="/umidade" element={<Umidade dados={dadosUmidade} />} />
        <Route path="/luminosidade" element={<Luminosidade dados={dadosLuminosidade} />} />
        <Route path="/contador" element={<Contador dados={dadosContador} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
};

export default App;
