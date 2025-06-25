import React, { useState, useRef } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import ClearButton from './ClearButton';
import './Calculator.css';

// useState, useRef 사용
const Calculator = () => {
  const [expression, setExpression] = useState('');
  const inputRef = useRef(null); // 포커스 제어나 기록에 활용 가능

  const handleNumberClick = (num) => setExpression((prev) => prev + num);
  const handleOperatorClick = (op) => setExpression((prev) => prev + op);
  const handleResult = (res) => setExpression(String(res));
  const handleClear = () => setExpression('');

  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="numbers">
        {[...'1234567890'].map((n) => (
          <NumberButton key={n} number={n} onClick={handleNumberClick} />
        ))}
      </div>
      <div className="operators">
        {['+', '-', '*', '/'].map((op) => (
          <OperatorButton key={op} operator={op} onClick={handleOperatorClick} />
        ))}
        <EqualButton className="eqaul" expression={expression} onResult={handleResult} />
        <ClearButton className="clear" onClear={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;

/* import { useCallback, useRef, useState, useMemo } from "react";

function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    //const inputRef = useRef(null);

    // 무거운 복잡한 계산을 처리 useMemo로 처리
    const result = useMemo(() => {
        return number1 * number1 + number2 * number2;
    }, [number1, number2]);

    // 입력값이 바뀔 때마다 실행되는 함수 (useCallback)
    const handleChange1 = useCallback((e)=>{
        setNumber1(Number(e.target.value));
        console.log("number1: ",number1);
    },[number1])
    const handleChange2 = useCallback((e)=>{
        setNumber2(Number(e.target.value))
        console.log("number1: ",number2);
    },[number2])

    return (
        <div>
            <input type="text" value={number1} onChange={handleChange1}/>
            <input type="text" value={number2} onChange={handleChange2}/>
            <div>결과(제곱의 합): {result}</div>
        </div>
    )
}

export default Calculator; */