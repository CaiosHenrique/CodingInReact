import React from 'react';
import './App.css';
import NovoConteudo from './NovoConteudo';
import NovoConteudoDois from './NovoConteudoDois';




function App() {

  const [ str,setStr ] = React.useState('LOW NINE IS THE GREATEST LEAGUE GANG 4EVER!!!')

  function HanckleClick(){
    setStr('PLAY THE HARDSTYLE!!!')
  }


  return (
    <div className="App">
      <h1>{str}</h1>
      <NovoConteudo></NovoConteudo>
      <NovoConteudo valor="Texto 2"
      ></NovoConteudo>
      <NovoConteudoDois valor="sei la mano"></NovoConteudoDois>
      <button onClick={()=>HanckleClick()}>CLICK HERE TO JOIN ON L9</button>
    </div>
  );
}

export default App;
