// import useCanvas from "./useCanvas";
import { useEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
export default function DHUButtTJoin() {
  const [r, setR] = useState(65);
  const [t2, setT2] = useState(453);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // use rough
    const roughCanvas = rough.canvas(canvasRef.current);
    // leftShape line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(236, 115);
    ctx.lineTo(236, 52);
    ctx.stroke();
    // leftShape text t2
    ctx.font = "40px Arial";
    ctx.fillText("t2", 327, 41);
    // leftShape arrow
    roughCanvas.path(
      ` M 241 55 L 241 50 L 236 55 L 241 60 L 241 55 L${t2 - 6} 55 L${
        t2 - 6
      } 50 L${t2 - 6 + 5} 55 L${t2 - 6} 60 L${t2 - 6} 55 `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // leftShape line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(t2, 115);
    ctx.lineTo(t2, 52);
    ctx.stroke();
    // leftShape
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.moveTo(236, 115);
    ctx.lineTo(334, 115);
    ctx.lineTo(338, 137);
    ctx.lineTo(349, 94);
    ctx.lineTo(351, 115);
    ctx.lineTo(t2, 115);
    ctx.lineTo(t2, 546);
    ctx.lineTo(351, 546);
    ctx.lineTo(349, 525);
    ctx.lineTo(338, 565);
    ctx.lineTo(334, 548);
    ctx.lineTo(237, 548);
    ctx.closePath();
    ctx.stroke();
    // b left line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(t2, 544);
    ctx.lineTo(t2, 647);
    ctx.stroke();
    // b right line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(460, 341);
    ctx.lineTo(460, 647);
    ctx.stroke();
    // left b arrow
    roughCanvas.path(
      ` M ${t2 - 5} 647 L ${t2 - 5} 642 L ${t2} 647 L ${t2 - 5} 652 L ${
        t2 - 5
      } 647 L423 647 `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // right b arrow
    roughCanvas.path(
      ` M 467 647 L 467 642 L 462 647 L 467 652 L 467 647 L 487 647 `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // b line between arrow right and left
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "blue";
    ctx.moveTo(450, 647);
    ctx.lineTo(462, 647);
    ctx.stroke();
    // c top line right shape
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(460, 320);
    ctx.lineTo(839, 320);
    ctx.stroke();
    // c bottom line right shape
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(460, 342);
    ctx.lineTo(839, 342);
    ctx.stroke();
    // arrow for c between lines
    roughCanvas.path(
      ` M 829 335 L 824 335 L 829 340 L 834 335 L 829 335 L 829 327 L 824 327 L 829 322 L 834 327 L 829 327 `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // c text
    ctx.font = "30px Arial";
    ctx.fillText("c", 800, 338);
    // arrow for h between lines
    roughCanvas.path(
      `M 810 348 L 805 348 L 810 343 L 815 348 L 810 348 L 810 434 L 805 434 L 810 439 L 815 434 L 810 434  `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // h text
    ctx.font = "30px Arial";
    ctx.fillText("h", 821, 410);
    //   rightShape
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
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
    // t1 top line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(776, 225);
    ctx.lineTo(917, 225);
    ctx.stroke();
    // t1 bottom line
    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "green";
    ctx.moveTo(776, 440);
    ctx.lineTo(917, 440);
    ctx.stroke();
    // arrow for t1 between lines
    roughCanvas.path(
      ` M 900 433 L 895 433 L 900 438 L 905 433 L 900 433 L 900 231 L 895 231 L 900 223 L 905 231 L 900 231 `,
      {
        stroke: "blue",
        strokeWidth: 1,
        roughness: 0,
        fill: "blue",
        fillStyle: "solid",
      }
    );
    // t1 text
    ctx.font = "30px Arial";
    ctx.fillText("t1", 910, 330);
  }, [t2, r]);

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
  const handelDec = () => {
    setT2(t2 - 50);
  };
  return (
    <>
      <button onClick={handelInc}>t2+</button>
      <button onClick={handelDec}>t2-</button>
      <button onClick={handelIncR}>R +</button>
      <button onClick={handelDecR}>R -</button>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
}
