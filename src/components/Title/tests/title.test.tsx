import React from "react";
import { render } from "@testing-library/react";
import { Title } from "..";

const titleData = "Sample Title";

test("Title component renders correctly", () => {
  const component = render(<Title title={titleData} />);
  component.getByText(titleData);
});
