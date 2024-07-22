import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura) / 100;
      const imcCalculado = parseFloat(peso) / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado.toFixed(2));
      classificarIMC(imcCalculado);
    }
  };

  const classificarIMC = (imc) => {
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }
    setClassificacao(classificacao);
  };

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
    calcularIMC();
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
    calcularIMC();
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm): </label>
        <input type="number" value={altura} onChange={handleAlturaChange} />
      </div>
      <div>
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={handlePesoChange} />
      </div>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h2>Classificação: {classificacao}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
