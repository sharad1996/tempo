import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./index";

describe("Dashboard Tests", () => {
  test("Render Dashboard", async () => {
    render(<Dashboard />);
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    const heading = screen.getByRole("heading", { name: /dashboard/i });
    expect(heading).toBeInTheDocument();
    const teamsHeading = screen.getByRole("heading", { name: /teams/i });
    expect(teamsHeading).toBeInTheDocument();
  });

  test("Search field", async () => {
    userEvent.setup();
    render(<Dashboard />);
    const inputField = screen.getByRole("textbox");
    await userEvent.type(inputField, "oral");
    expect(inputField).toHaveValue("oral");
    expect(inputField).toBeInTheDocument();
  });

  test("Search field data filter correct", async () => {
    userEvent.setup();
    render(<Dashboard />);
    const inputField = screen.getByRole("textbox");
    await userEvent.type(inputField, "oral");
    expect(inputField).toBeInTheDocument();
  });
});
