import React from "react";
import { render } from "@testing-library/react";
import { CustomSideBar } from "..";

test("CustomSideBar component renders 'main' type correctly", () => {
  const component = render(
    <CustomSideBar type="main">Main Sidebar Content</CustomSideBar>
  );
  component.getByText("Main Sidebar Content");
});

test("CustomSideBar component renders 'aside' type correctly", () => {
  const component = render(
    <CustomSideBar type="aside">Aside Sidebar Content</CustomSideBar>
  );
  component.getByText("Aside Sidebar Content");
});
