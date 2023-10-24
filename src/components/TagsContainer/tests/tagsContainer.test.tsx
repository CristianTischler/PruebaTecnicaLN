import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TagsContainer } from "..";

const tagsData = [{ slug: "tag1", text: "Tag 1" }];

test("TagsContainer component renders correctly", () => {
  const component = render(<TagsContainer tags={tagsData} />);
  component.getByText("Tag 1");
});

test("Tags in TagsContainer component are links", () => {
  const component = render(<TagsContainer tags={tagsData} />);
  const link = component.getByText("Tag 1");
  fireEvent.click(link);
  expect(link).toHaveProperty("href", "http://localhost/tema/tag1");
});
