import "./button.css";

function Button({ onClick, text, disabled = false }) {
  const handleOnClick = (e) => {
    onClick(e);
  };

  return (
    <button
      className="button"
      onClick={(e) => handleOnClick(e)}
      disabled={disabled}
      title={disabled ? "Wypełnij poprawnie formularz" : "Dodaj"}
    >
      {text}
    </button>
  );
}

export default Button;
