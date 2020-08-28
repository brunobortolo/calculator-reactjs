import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface CalculatorNumberProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
}

const CalculatorNumber: React.FC<CalculatorNumberProps> = ({content, ...rest}) => {
    const idNumber = `number-${content}`
    return (
            <button className="calculator-number" id={idNumber} {...rest}>
            { content }
            </button>
    )
}

export default CalculatorNumber;