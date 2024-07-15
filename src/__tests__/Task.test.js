import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect"; // Ensure this import for extended matchers

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  // Locate the task items "Buy rice"
  const taskItems = screen.getAllByText(/Buy rice/i);

  // Find the delete button within the first task item
  const deleteButton = taskItems[0].closest('.task').querySelector('.delete');

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // Assert that the task "Buy rice" is no longer in the document
  expect(screen.queryByText(/Buy rice/i)).not.toBeInTheDocument();
});
