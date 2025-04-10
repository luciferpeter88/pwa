import React from "react";
// pass down the onclikc event to the button if there is one
function Vibration({ children, onClick, vibrationPattern = 50, ...props }) {
  const handleClick = (e) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(vibrationPattern);
      console.log("VIBRATING");
    }
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export default Vibration;
