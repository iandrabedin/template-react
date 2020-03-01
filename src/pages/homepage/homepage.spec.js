import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Homepage } from "./homepage";

afterEach(cleanup);

describe("Homepage", () => {
  it("should render as expect", () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
