import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addNewBox = (box) => {
    setBoxes((boxes) => [...boxes, box]);
  };
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addNewBox={addNewBox} />
      {boxes.map(({ id, height, width, backgroundColor }) => {
        return (
          <Box
            key={id}
            id={id}
            height={height}
            width={width}
            backgroundColor={backgroundColor}
            handleRemove={removeBox}
          />
        );
      })}
    </div>
  );
};

export default BoxList;
