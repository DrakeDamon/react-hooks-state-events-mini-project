import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";
import "@testing-library/jest-dom/extend-expect"; // Ensure this import for extended matchers

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});

test("is removed from the list when the delete button is clicked", () => {
  const handleDeleteTask = jest.fn();

  render(<TaskList tasks={TASKS} onDeleteTask={handleDeleteTask} />);

  const task = screen.getByText(/Buy rice/);
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(handleDeleteTask).toHaveBeenCalledWith(expect.objectContaining({ text: "Buy rice" }));
});
