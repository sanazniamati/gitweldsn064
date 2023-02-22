import useCanvas from "./useCanvas";
export default function DHUButtTJoin({ drawShape }) {
  const canvasRef = useCanvas(drawShape);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </>
  );
}
