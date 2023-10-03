import { render, screen } from "@testing-library/react";
import { Dashboard } from "./components/Dashboard";

test("renders learn react link", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/News Feed/i);
  expect(linkElement).toBeInTheDocument();
});
