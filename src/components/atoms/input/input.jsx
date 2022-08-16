import { useId } from "react";
import "./input.css";

const pfx = "input";

function Input({ onChange, value, labelText, placeholderText, type = "text" }) {
  const handleOnChange = (e) => {
    onChange(e);
  };

  const id = useId();

  return (
    <div className={`${pfx}-container`}>
      <label className="label" htmlFor={id}>
        {labelText}
      </label>
      <input
        id={id}
        className={pfx}
        type={type}
        value={value}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholderText}
      />
    </div>
  );
}

export default Input;
