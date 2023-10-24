import React from "react";
import { render } from "@testing-library/react";
import { CustomLayout } from "..";

test("CustomLayout component renders children correctly", () => {
  const component = render(
    <CustomLayout>
      <div>Child Element</div>
    </CustomLayout>
  );
  component.getByText("Child Element");
});
