import React from 'react';

import './styles.css';

interface ButtonProps {
    content: string;
}

const CalculatorButton: React.FC<ButtonProps> = (props) => {
    return (
        <p>{ props.content }</p>
    )
}

export default CalculatorButton;