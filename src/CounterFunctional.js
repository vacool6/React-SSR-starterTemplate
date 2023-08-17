import React, { useState } from "react";

const CounterFunctional = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <h1>{val}</h1>
      <button onClick={() => setVal((v) => v + 1)}>INC+</button>
      <button onClick={() => setVal((v) => v - 1)}>DEC-</button>
    </>
  );
};

export default CounterFunctional;
