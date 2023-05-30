import { render } from "@testing-library/react";
import Todo from "./Todo";

test("renders app w/o crashing", () => {
  render(<Todo />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
