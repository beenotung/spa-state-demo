import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [a, setA] = useState(1);
  let [b, setB] = useState(1);
  let [c, setC] = useState(a + b);
  useEffect(() => {
    setC(a + b);
  }, [a, b]);
  return (
    <>
      <input
        type="number"
        value={a}
        onInput={(e) => setA((e.target as HTMLInputElement).valueAsNumber)}
      />
      +
      <input
        type="number"
        value={b}
        onInput={(e) => setB((e.target as HTMLInputElement).valueAsNumber)}
      />
      =<span className="answer">{c}</span>
    </>
  );
}

export default App;
