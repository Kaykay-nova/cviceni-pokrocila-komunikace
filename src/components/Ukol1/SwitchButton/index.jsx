import './style.css';

export const SwitchButton = ({ label, onSwitch }) => {
  return (
    <button onClick={onSwitch} className="switch-button">
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
