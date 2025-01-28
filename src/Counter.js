import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br/> <br/>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ClickToOff" : "ClickToOn"}</button>
    </div>
  );
};

export default Counter;