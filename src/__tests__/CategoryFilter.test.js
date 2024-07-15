import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES, TASKS } from "../data";
import "@testing-library/jest-dom/extend-expect"; // Ensure this import for extended matchers

test("displays a button for each category", () => {
  render(<CategoryFilter CATEGORIES={CATEGORIES} TASKS={TASKS} />);

  CATEGORIES.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test("clicking the category button filters the task list", () => {
  render(<CategoryFilter CATEGORIES={CATEGORIES} TASKS={TASKS} />);

  const codeButton = screen.getByText("Code");
  
  // Simulate clicking the "Code" category button
  fireEvent.click(codeButton);

  // Check for the presence of "Build a todo app" in the task list
  const tasks = screen.queryAllByText("Build a todo app");
  expect(tasks.length).toBeGreaterThan(0);

  // Check for the absence of "Buy rice" in the task list
  const buyRiceTasks = screen.queryAllByText("Buy rice");
  expect(buyRiceTasks.length).toBe(0);
});
