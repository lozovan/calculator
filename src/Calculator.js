import React, { useState } from 'react';
import './Calculator.css'; // Create a CSS file for styles

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleClear = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
    setExpression(expression + value);
  };

  const handleOperator = (operator) => {
    if (/[\+\-\*\/]$/.test(expression)) {
      setExpression(expression.slice(0, -1) + operator);
    } else {
      setExpression(expression + operator);
    }
    setDisplay('0');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
      setExpression(expression + '.');
    }
  };

  const handleEquals = () => {
    try {
      const result = eval(expression).toString();
      setDisplay(result);
      setExpression(result);
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div id="display" className="display">{display}</div>
      <button id="clear" onClick={handleClear}>AC</button>
      <button id="divide" onClick={() => handleOperator('/')}>/</button>
      <button id="multiply" onClick={() => handleOperator('*')}>*</button>
      <button id="subtract" onClick={() => handleOperator('-')}>-</button>
      <button id="add" onClick={() => handleOperator('+')}>+</button>
      <button id="equals" onClick={handleEquals}>=</button>
      <button id="decimal" onClick={handleDecimal}>.</button>
      <button id="zero" onClick={() => handleClick('0')}>0</button>
      <button id="one" onClick={() => handleClick('1')}>1</button>
      <button id="two" onClick={() => handleClick('2')}>2</button>
      <button id="three" onClick={() => handleClick('3')}>3</button>
      <button id="four" onClick={() => handleClick('4')}>4</button>
      <button id="five" onClick={() => handleClick('5')}>5</button>
      <button id="six" onClick={() => handleClick('6')}>6</button>
      <button id="seven" onClick={() => handleClick('7')}>7</button>
      <button id="eight" onClick={() => handleClick('8')}>8</button>
      <button id="nine" onClick={() => handleClick('9')}>9</button>
    </div>
  );
};

export default Calculator;