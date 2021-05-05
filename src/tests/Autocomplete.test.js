import React from "react";
import { render, screen } from "@testing-library/react";

import Autocomplete from "../components/Autocomplete";

jest.mock("../utils/api");

describe("Autocomplete", () => {
  let clickFn;
  
  const renderTest = () => {
    clickFn = jest.fn()
    const tools = render(<Autocomplete onClickProduct={clickFn} />)

    const input = screen.getByRole("textbox", {
      placeholder: /search for a product/i,
    });

    return { input, tools }
  }


  it("renders correctly", () => {
    renderTest()
    screen.getByPlaceholderText('Search for a product')
  });
});
