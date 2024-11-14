import './App.css';
import Header from './Components/header';
import Input from './Components/input';
import Button from './Components/button';
import Select from './Components/select';
import { useState } from 'react';

function App() {

  const [moeda, setMoeda] = useState('');

  const moedaOpcao = [
    { value: 'usd', label: 'Dólar (USD)' },
    { value: 'eur', label: 'Euro (EUR)' },
    { value: 'brl', label: 'Real (BRL)' }
  ]

  return (
    <div className="App">
      <Header />
      <div className='App-input'>
        <Input type="number" width="150px" label="Valor"/>
        <Select label="Converter de" options={moedaOpcao} onChange={((e) => setMoeda(e.target.value))} value={moeda}/>
        <Button />
        <Select label="Para" options={moedaOpcao} onChange={((e) => setMoeda(e.target.value))} value={moeda}/>
      </div>
    </div>
  );
}

export default App;
