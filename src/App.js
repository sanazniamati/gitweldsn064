import DHUButtTJoin from "./DHUButtTJoin";
import { useRef, useState } from "react";
import React from "react";
// import Rough from "roughjs/bundled/rough.esm.js";
// import Rough from "roughjs/bin/rough";

export default function App() {
  const [r, setR] = useState(65);
  const [t2, setT2] = useState(450);

  const handelIncR = () => {
    setR(r + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
  };
  const handelInc = () => {
    setT2(t2 + 50);
    console.log("t2: ", t2);
  };

  return (
    <>
      <button onClick={handelInc}>+</button>
      <button onClick={handelIncR}>R +</button>
      <button onClick={handelDecR}>R -</button>
      <DHUButtTJoin r={r} t2={t2} />
    </>
  );
}
