import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("renders Container component", () => {
  test("renders empty Container", () => {
    render(<Container />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("renders with title Container", () => {
    render(<Container title="Hello world" />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  test("renders with title and children Container", () => {
    render(
      <Container title="Hello world">
        <ul>List</ul>
      </Container>
    );
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    expect(screen.getByText(/list/i)).toBeInTheDocument();
  });
});
