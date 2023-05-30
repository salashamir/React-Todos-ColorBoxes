function Box({ id, handleRemove, width, height, backgroundColor }) {
  return (
    <div
      style={{ backgroundColor, height: `${height}px`, width: `${width}px` }}
    >
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
}

export default Box;
