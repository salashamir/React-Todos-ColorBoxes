import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("should render without crashing", () => {
  render(<TodoList />);
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo", () => {
  const { queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("New todo:");
  const button = queryByText("Add new todo");

  expect(queryByText("Go to the movies")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Go to the movies" } });
  fireEvent.click(button);
  expect(queryByText("Go to the movies")).toBeInTheDocument();
});
