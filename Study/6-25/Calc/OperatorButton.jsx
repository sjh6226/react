const OperatorButton = ({ operator, onClick }) => {
  const handleClick = () => onClick(operator);
  return <button onClick={handleClick}>{operator}</button>;
};

export default OperatorButton;