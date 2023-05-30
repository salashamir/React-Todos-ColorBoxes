import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    todoText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, id: uuid() });
    setFormData({ todoText: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todoText">New todo:</label>
          <input
            type="text"
            onChange={handleChange}
            name="todoText"
            id="todoText"
            value={formData.todoText}
          />
        </div>
        <button type="submit">Add new todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
