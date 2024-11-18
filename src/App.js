import "./App.css";
import Header from "./Components/header";
import Input from "./Components/input";
import Button from "./Components/button";
import Select from "./Components/select";
import { ResultBlock } from "./Components/resultBlock";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [moedaOrigem, setMoedaOrigem] = useState("");
  const [moedaDestino, setMoedaDestino] = useState("");
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [opcoesMoeda, setOpcoesMoeda] = useState([]);

  useEffect(() => {
    const fetchMoedas = async () => {
      try {
        const resposta = await axios.get('http://localhost:3001/moedas');
        console.log('Resposta do backend:', resposta.data);
  
        if (Array.isArray(resposta.data)) {
          const moedasArray = resposta.data.map((moeda) => ({
            value: moeda.code,
            label: moeda.name ? `${moeda.name} (${moeda.code})` : moeda.code,
          }));
  
          console.log('Moedas formatadas no frontend:', moedasArray);
          setOpcoesMoeda(moedasArray);
        } else {
          console.error('O backend não retornou um array válido:', resposta.data);
        }
      } catch (erro) {
        console.error('Erro ao obter a lista de moedas:', erro);
      }
    };
  
    fetchMoedas();
  }, []);

  
   
  const handleConverter = async () => {
    try {
      const resposta = await axios.post("http://localhost:3001/converter", {
        valor: parseFloat(valor),
        moeda_origem: moedaOrigem,
        moeda_destino: moedaDestino,
      });
      setResultado(resposta.data);
    } catch (erro) {
      console.error(erro);
      alert("Erro ao converter moeda");
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="container-flex">
          <Input
            type="number"
            width="150px"
            label="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <Select
            label="Converter de"
            options={opcoesMoeda}
            onChange={(e) => setMoedaOrigem(e.target.value)}
            value={moedaOrigem}
          />
          <Select
            label="Para"
            options={opcoesMoeda}
            onChange={(e) => setMoedaDestino(e.target.value)}
            value={moedaDestino}
          />
          <Button onClick={handleConverter} label="Converter" />
        </div>
        {resultado && (
          <div className="container-2">
            <h1 className="title">Resultado da conversão</h1>
            <div className="container-flex-2">
              <ResultBlock
                Desc1={"Converter De"}
                Desc2={"Valor a converter"}
                description={resultado.moeda_origem}
                value={valor}
              />
              <ResultBlock
                Desc1={"Para"}
                Desc2={"Resultado da conversão"}
                description={resultado.moeda_destino}
                value={parseFloat(resultado.valor_convertido).toFixed(2)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
