import React, { useEffect, useState } from "react";

export default function EffectHook() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    let ref = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    if (ref < 0) {
      clearInterval(ref);
    }
  }, []);
  // useEffect(() => {
  //   setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);
  // }, []);
  return (
    <div>
      <h1>Count Down: {counter}</h1>
    </div>
  );
}
