import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";

describe("UserDetails Tests", () => {
  test("Render UserDetails", async () => {
    render(<UserDetails />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    const userName = screen.getByAltText("undefined Img");
    expect(userName).toBeInTheDocument();
  });
});
