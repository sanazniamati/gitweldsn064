import { useEffect, useRef } from "react";
const useCanvas = (draw) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our draw come here
    draw(context);
  }, [draw]);
  return canvasRef;
};

export default useCanvas;
