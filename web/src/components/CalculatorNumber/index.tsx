import React from 'react';

import './styles.css';

interface CalculatorNumberProps {
    content: string;
}

const CalculatorNumber: React.FC<CalculatorNumberProps> = (props) => {
    const idNumber = `number-${props.content}`
    return (
        <div className="calculator-number" id={idNumber}>
            <p>{ props.content }</p>
        </div>
    )
}

export default CalculatorNumber;