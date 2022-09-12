import { render, screen } from "@testing-library/react";
import App from "./App";

test("Did rest api loaded", () => {
  render(<App />);
  const textElement = screen.getByText(/bet/i);
  expect(textElement).toBeInTheDocument();
});
