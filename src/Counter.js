import { useState } from "react";
//Fichier Counter.jsx
function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <>
      <button onClick={() => setCounterValue(counterValue + 1)}>
        Incrémenter
      </button>
      <p>
        Valeur actuelle: <b>{counterValue}</b>
      </p>
    </>
  );
}
export default Counter;
