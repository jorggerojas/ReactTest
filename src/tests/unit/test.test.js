import { render } from "@testing-library/react";
import React from "react";
import App from "../../App";

test("test with rtl", () => {
  const { findAllByText } = render(<App />);
  findAllByText("Hello, World!");
});
