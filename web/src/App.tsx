import React, { useState, useEffect } from 'react';

import CalculatorNumber from './components/CalculatorNumber'; 
import CalculatorOperator from './components/CalculatorOperator';

import './assets/styles/global.css';
import './styles.css';




interface ScreenInfo {
  digit: string;
}

interface ScreenInfoProps extends Array<ScreenInfo>{}

function App() {
  const [screenDigit, setScreenDigit] = useState("");
  const [screenInfo, setScreenInfo] = useState<ScreenInfoProps>([]);
  const [numberOperation, setNumberOperation] = useState("");

  useEffect(() => {
    setScreenInfo([...screenInfo, {digit: screenDigit}]);
    
    setNumberOperation(numberOperation + screenDigit);
    
  }, [screenDigit])

  function handleOperationClick () {

  }
  return (
    <div className="container">
      <div id="calculator-screen">
          <p>{numberOperation}</p>
      </div>
      <CalculatorNumber content="0" onClick={() => { setScreenDigit("0")}} />
      <CalculatorNumber content="1" onClick={() => { setScreenDigit("1")}} />
      <CalculatorNumber content="2" onClick={() => { setScreenDigit("2")}} />
      <CalculatorNumber content="3" onClick={() => { setScreenDigit("3")}} />
      <CalculatorNumber content="4" onClick={() => { setScreenDigit("4")}} />
      <CalculatorNumber content="5" onClick={() => { setScreenDigit("5")}} />
      <CalculatorNumber content="6" onClick={() => { setScreenDigit("6")}} />
      <CalculatorNumber content="7" onClick={() => { setScreenDigit("7")}} />
      <CalculatorNumber content="8" onClick={() => { setScreenDigit("8")}} />
      <CalculatorNumber content="9" onClick={() => { setScreenDigit("9")}} />

      <CalculatorOperator content="dot" onClick={handleOperationClick} />
      <CalculatorOperator content="division" onClick={handleOperationClick} />
      <CalculatorOperator content="multiplication" onClick={handleOperationClick} />
      <CalculatorOperator content="subtraction" onClick={handleOperationClick} />
      <CalculatorOperator content="addition" onClick={handleOperationClick} />
      <CalculatorOperator content="result" onClick={handleOperationClick} />

    </div>
  );
}

export default App;
