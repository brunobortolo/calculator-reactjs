import React from 'react';

import divisionIcon from '../../assets/images/division.svg';

import './styles.css';

interface CalculatorOperatorProps {
    type: string;
}

const CalculatorOperator: React.FC<CalculatorOperatorProps> = (props) => {
    
    let returnContent = "";
    if (props.type === "dot") returnContent = ".";
    if (props.type === "addition") returnContent = "+";
    if (props.type === "subtraction") returnContent = "-";
    if (props.type === "multiplication") returnContent = "x";
    if (props.type === "result") returnContent = "=";

    const idOperator = `operator-${props.type}`

    return (
        <div className="calculator-operator" id={ idOperator }>
            {props.type === "division" ? <img src={divisionIcon} alt="Divisão"/> : <p>{ returnContent }</p>}
        </div>
    )
}

export default CalculatorOperator;