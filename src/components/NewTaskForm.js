import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

// const [category, setCategory] = useState(CATEGORIES[0]);

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text,
      category
    };
    onTaskFormSubmit(newTask);
    setText(""); // Clear the form input after submission
    setCategory(CATEGORIES[0]);
    }

  const options = CATEGORIES.filter(category => category !== "All").map((category, index) => {
    return <option key={index} >{category}</option> 
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
