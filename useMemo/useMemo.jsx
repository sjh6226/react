const result = useMemo(() => {
  console.log('복잡한 계산 실행!');
  return calcResult(input);
}, [input]);

export default function UseMemo;