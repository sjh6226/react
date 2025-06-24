import React, { useState, useCallback } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // useCallback으로 연산 함수 메모이제이션
  const handleAdd = useCallback(() => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  }, [num1, num2]);

  return (
    <div>
      <h2>간단한 덧셈 계산기</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleAdd}>더하기</button>
      <p>결과: {result}</p>
    </div>
  );
}

export default Calculator;
