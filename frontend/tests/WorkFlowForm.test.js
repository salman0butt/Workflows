import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import WorkFlowForm from "../src/components/WorkFlowForm";

test("renders the workflow form correctly", () => {
  const onSubmitMock = jest.fn();
    render(
    <WorkFlowForm onSubmit={onSubmitMock} />
  );

  // Find the input element by its placeholder text
  const inputElement = screen.getByPlaceholderText("Enter workflow name");

  // Find the "Add Workflow" button element
  const addButtonElement = screen.getByText("Add Workflow");

  // Simulate user input in the input field
  fireEvent.change(inputElement, { target: { value: "Test Workflow" } });

  // Simulate clicking the "Add Workflow" button
  fireEvent.click(addButtonElement);

  // Ensure that the onSubmit function was called with the correct value
  expect(onSubmitMock).toHaveBeenCalledWith("Test Workflow");

  // Ensure that the input field is cleared after submission
  expect(inputElement.value).toBe("");
});
