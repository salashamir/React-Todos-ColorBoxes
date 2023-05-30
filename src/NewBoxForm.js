import { useState } from "react";
import { v4 as uuid } from "uuid";

export const NewBoxForm = ({ addNewBox }) => {
  const INITIAL_STATE = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addNewBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            onChange={handleChange}
            type="number"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            onChange={handleChange}
            type="number"
            name="height"
            id="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Color:</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
