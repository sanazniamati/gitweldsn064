import { useEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";

const useCanvas = (draw) => {
  const [t2, setT2] = useState(200);
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // use rough
    const roughCanvas = rough.canvas(canvasRef.current);
    roughCanvas.path(
      ` M 100 50 L 100 40 L 90 50 L 100 60 L 100 50 L${t2} 50 L${t2} 40 L${
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
    // Our draw come here
    draw(context);
  }, [draw]);
  return canvasRef;
};

export default useCanvas;
