import React, { useState } from "react";

function CategoryFilter({ CATEGORIES, TASKS }) {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  function handleClick(index) {
    setSelectedButtonIndex(index);
    if (CATEGORIES[index] === "All") {
      setFilteredTasks(TASKS);
    } else {
      const selectedCategory = CATEGORIES[index];
      const filteredTasks = TASKS.filter((task) => task.category === selectedCategory);
      setFilteredTasks(filteredTasks);
    }
  }

  const listOfFilteredTasks = filteredTasks.map((task, index) => (
    <li key={index}>{task.text}</li>
  ));

  const listOfCategories = CATEGORIES.map((category, index) => (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={selectedButtonIndex === index ? "selected" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listOfCategories}
      <ul>{listOfFilteredTasks}</ul>
    </div>
  );
}

export default CategoryFilter;
