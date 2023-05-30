import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders app w/o crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
  const boxList = render(<BoxList />);

  expect(boxList.queryByText("Remove")).not.toBeInTheDocument();

  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Height:");
  const colorInput = boxList.getByLabelText("Color:");

  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(heightInput, { target: { value: "400" } });

  const button = boxList.getByText("Add new");

  fireEvent.click(button);

  const removeBtn = boxList.getByText("Remove");
  expect(removeBtn).toBeInTheDocument();

  expect(removeBtn.parentElement).toHaveStyle("background-color: red;");

  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});
