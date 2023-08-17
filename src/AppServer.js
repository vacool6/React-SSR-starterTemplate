import React, { useState } from "react";

const AppServer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Server side rendered counter app</h1>
      <p>Counter: {count}</p>
      <h1>Header</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default AppServer;
