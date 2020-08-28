import React, { ButtonHTMLAttributes } from 'react';

import divisionIcon from '../../assets/images/division.svg';

import './styles.css';

interface CalculatorOperatorProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    content: string;
}

const CalculatorOperator: React.FC<CalculatorOperatorProps> = (props) => {
    
    let returnContent = "";
    if (props.content === "dot") returnContent = ".";
    if (props.content === "addition") returnContent = "+";
    if (props.content === "subtraction") returnContent = "-";
    if (props.content === "multiplication") returnContent = "x";
    if (props.content === "result") returnContent = "=";

    const idOperator = `operator-${props.content}`

    return (
        <div className="calculator-operator" id={ idOperator }>
            {props.content === "division" ? <img src={divisionIcon} alt="Divisão"/> : <p>{ returnContent }</p>}
        </div>
    )
}

export default CalculatorOperator;