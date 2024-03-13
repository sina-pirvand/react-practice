import { forwardRef, useRef } from "react";
import PropTypes from "prop-types";

export default function App() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <Input ref={inputRef} label={"label: "} placeholder={"type..."} />
      <button onClick={handleFocus}>Button</button>
    </div>
  );
}

const Input = forwardRef(({ label, placeholder }, ref) => {
  return (
    <label>
      {label}
      <input type="text" placeholder={placeholder} ref={ref} />
    </label>
  );
});

Input.displayName = "Input";
Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
