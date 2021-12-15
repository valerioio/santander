import { useState } from "react";
import fizzbuzz from "./helpers/fizzbuzz";

function App() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }

  return (
    <>
      <h1 data-testid="fizzbuzz">{fizzbuzz(value)}</h1>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
