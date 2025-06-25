import React, { useMemo } from 'react';

const EqualButton = ({ expression, onResult }) => {
    // useMemo를 사용하여 계산 결과를 메모이제이션 > 계산 최적화
  const result = useMemo(() => {
    try {
      return eval(expression); // 실제 구현 시 eval은 피하고 직접 파싱 권장
    } catch {
      return 'Error';
    }
  }, [expression]);

  return <button onClick={() => onResult(result)}>=</button>;
};

export default EqualButton;