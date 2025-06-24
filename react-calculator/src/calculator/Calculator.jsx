import { useCallback, useRef, useState, useMemo } from "react";

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

export default Calculator;