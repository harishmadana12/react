import React, { useState } from "react";

export default function RandNum() {
  // let initNum = Math.floor(Math.random() * 100);
  let initNum = 10;
  const constNum = initNum;

  const [randInitNum, setrandInitNum] = useState(constNum);

  const changeNum = () => {
    let newNum = Math.floor(Math.random() * 100);
    setrandInitNum(newNum);
  };

  return (
    <div className="container mx-auto">
      <h2>Initial Number: {initNum}</h2>
      <button className="btn btn-success my-3" onClick={changeNum}>
        Generate Random Number
      </button>
      <h2>Random Number: {randInitNum}</h2>
    </div>
  );
}
