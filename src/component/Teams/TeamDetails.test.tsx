import { render, screen } from "@testing-library/react";
import TeamDetails from "./TeamDetails";

describe("TeamDetail Tests", () => {
  test("Render TeamDetail", async () => {
    render(<TeamDetails />);
    const mainHeading = screen.getByRole("heading", {
      name: "",
    });
    expect(mainHeading).toBeInTheDocument();
  });
});
