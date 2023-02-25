// import useCanvas from "./useCanvas";
import { useEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
export default function DHUButtTJoin({ t2, r }) {
  const [text, setText] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // use rough
    const roughCanvas = rough.canvas(canvasRef.current);
    // draw text
    ctx.font = "50px Arial";
    ctx.fillText("x,y : " + text.x + " " + text.y, 500, 50);

    // draw arrow
    roughCanvas.path(
      ` M 241 50 L 241 40 L 231 50 L 241 60 L 241 50 L${t2} 50 L${t2} 40 L${
        t2 + 10
      } 50 L${t2} 60 L${t2} 50 `,
      {
        stroke: "green",
        strokeWidth: 1,
        roughness: 0,
        fill: "red",
        fillStyle: "solid",
      }
    );
    // leftShape
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
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
    ctx.strokeStyle = "blue";
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
    // Our draw come here
    // const drawShape = (ctx, r) => {
    //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //   // draw arrow
    //   ctx.beginPath();
    //   ctx.moveTo(236, 70);
    //   ctx.lineTo(453, 70);
    //   ctx.closePath();
    //   ctx.strokeStyle = "orange";
    //   ctx.stroke();
    //   // leftShape
    //   ctx.beginPath();
    //   ctx.lineWidth = 3;
    //   ctx.strokeStyle = "red";
    //   ctx.moveTo(236, 115);
    //   ctx.lineTo(334, 115);
    //   ctx.lineTo(338, 137);
    //   ctx.lineTo(349, 94);
    //   ctx.lineTo(351, 115);
    //   ctx.lineTo(453, 115);
    //   ctx.lineTo(453, 546);
    //   ctx.lineTo(351, 546);
    //   ctx.lineTo(349, 525);
    //   ctx.lineTo(338, 565);
    //   ctx.lineTo(334, 548);
    //   ctx.lineTo(237, 548);
    //   ctx.closePath();
    //   ctx.stroke();
    //   //   rightShape
    //   ctx.beginPath();
    //   ctx.strokeStyle = "blue";
    //   ctx.moveTo(460, 344);
    //   ctx.arc(460, 320 - r, r, (90 * Math.PI) / 180, 0, true);
    //   ctx.lineTo(531, 225);
    //   ctx.lineTo(776, 225);
    //   ctx.lineTo(776, 321);
    //   ctx.lineTo(755, 326);
    //   ctx.lineTo(797, 338);
    //   ctx.lineTo(776, 342);
    //   ctx.lineTo(776, 440);
    //   ctx.lineTo(526, 438);
    //   //curve bottom
    //   ctx.arc(525 - r, 343 + r, r, 0, (270 * Math.PI) / 180, true);
    //   ctx.closePath();
    //   ctx.stroke();
    // };
  }, [t2, r]);
  const handelMouseMove = (e) => {
    setText({ x: e.clientX, y: e.clientY });
    console.log("x:" + e.clientX + ", y:" + e.clientY);
  };
  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handelMouseMove}
      />
    </>
  );
}
