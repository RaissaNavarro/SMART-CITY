// pages/temperatura/index.js
import React from 'react';

const Temperatura = ({ dados }) => {
  return (
    <div>
      <h1>Dados de Temperatura</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.valor}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Temperatura;
