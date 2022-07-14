import { useEffect, useState } from "react";

function useKey(key) {
  const [pressed, setPressed] = useState(false);
  const match = (event) => key === event.key;

  const onDown = (event) => {
    if (match(event)) {
      setPressed(true); 
    }
  };

  const onUp = (event) => {
    if (match(event)) {
      setPressed(false); 
    }
  };

  
  useEffect(() => {
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);

    return () => {
      window.addEventListener("keydown", onDown);
      window.addEventListener("keyup", onUp);
    }
  })

  return pressed; 
}

export default useKey;