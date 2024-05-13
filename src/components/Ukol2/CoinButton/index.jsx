import './style.css';

export const CoinButton = ({ value, onCoinClick }) => {

  const handleClick = () => {
    onCoinClick(value);
  };

  return (
    <button onClick={handleClick} className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
