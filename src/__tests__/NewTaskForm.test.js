import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();

  render(
    <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  // Simulate entering text into the input
  fireEvent.change(screen.getByLabelText(/Details/i), {
    target: { value: "Test Task" },
  });

  // Simulate selecting a category
  fireEvent.change(screen.getByLabelText(/Category/i), {
    target: { value: CATEGORIES[1] },
  });

  // Simulate form submission
  fireEvent.submit(screen.getByText(/Add task/i));

  // Check if onTaskFormSubmit was called with the correct task object
  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Test Task",
    category: CATEGORIES[1],
  });
});
