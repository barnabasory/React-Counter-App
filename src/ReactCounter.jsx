import { useState } from "react";

const ReactCounter = () => {
  const [result, setResult] = useState(0);

  return (
    <div className="wrapper">
      <h1>REACT COUNTER APP</h1>

      <div className="result">{result}</div>

      <div className="btns">
        <button className="add" onClick={() => setResult(result + 1)}>
          +
        </button>
        <button className="subtract" onClick={() => setResult(result - 1)}>
          -
        </button>
        <button className="add-two" onClick={() => setResult(result + 2)}>
          +2
        </button>
        <button className="subtract-two" onClick={() => setResult(result - 2)}>
          -2
        </button>

        <button className="add-five" onClick={() => setResult(result + 5)}>
          +5
        </button>
        <button className="subtract-five" onClick={() => setResult(result - 5)}>
          -5
        </button>
      </div>
    </div>
  );
};

export default ReactCounter;
