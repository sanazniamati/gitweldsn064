import DHUButtTJoin from "./DHUButtTJoin";
import { useState } from "react";
export default function App() {
  const [r, setR] = useState(65);

  const drawShape = (ctx) => {
    // leftShape
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(236, 115);
    ctx.lineTo(334, 115);
    ctx.lineTo(338, 137);
    ctx.lineTo(349, 94);
    ctx.lineTo(351, 115);
    ctx.lineTo(453, 115);
    ctx.lineTo(453, 546);
    ctx.lineTo(351, 546);
    ctx.lineTo(349, 525);
    ctx.lineTo(338, 565);
    ctx.lineTo(334, 548);
    ctx.lineTo(237, 548);
    ctx.closePath();
    ctx.stroke();
    //   rightShape
    ctx.beginPath();
    ctx.moveTo(460, 344);
    ctx.arc(460, 320 - r, r, (90 * Math.PI) / 180, 0, true);
    ctx.lineTo(531, 225);
    ctx.lineTo(776, 225);
    ctx.lineTo(776, 321);
    ctx.lineTo(755, 326);
    ctx.lineTo(797, 338);
    ctx.lineTo(776, 342);
    ctx.lineTo(776, 440);
    ctx.lineTo(526, 438);
    //curve bottom
    ctx.arc(525 - r, 343 + r, r, 0, (270 * Math.PI) / 180, true);
    ctx.closePath();
    ctx.stroke();
  };
  const handelIncR = () => {
    setR(r + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
  };

  return (
    <>
      <button onClick={handelIncR}>R +</button>
      <button onClick={handelDecR}>R -</button>
      <DHUButtTJoin drawShape={drawShape} />
    </>
  );
}
