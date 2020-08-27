import React from 'react';

import CalculatorNumber from './components/CalculatorNumber'; 
import CalculatorOperator from './components/CalculatorOperator';

import './assets/styles/global.css';
import './styles.css';

function App() {
  return (
    <div className="container">
      <CalculatorNumber content="0"/>
      <CalculatorNumber content="1"/>
      <CalculatorNumber content="2"/>
      <CalculatorNumber content="3"/>
      <CalculatorNumber content="4"/>
      <CalculatorNumber content="5"/>
      <CalculatorNumber content="6"/>
      <CalculatorNumber content="7"/>
      <CalculatorNumber content="8"/>
      <CalculatorNumber content="9"/>

      <CalculatorOperator type="dot"/>
      <CalculatorOperator type="division"/>
      <CalculatorOperator type="multiplication"/>
      <CalculatorOperator type="subtraction"/>
      <CalculatorOperator type="addition"/>
      <CalculatorOperator type="result"/>

    </div>
  );
}

export default App;
