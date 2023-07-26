import {useState, React} from "react";

function NewTaskForm({categories, setCategory, details, setDetails, onTaskFormSubmit}) {

  const options = categories.filter(category => category !== "All").map(category => (
    <option key={category}>{category}</option>
  ))

  function chooseCategory(event) {
    console.log(event.target.value)
    setCategory(event.target.value);
  }

  function chooseDetails(event) {
    setDetails(event.target.value);

  }
  console.log(details)

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={chooseDetails} />
      </label>
      <label>
        Category
        <select name="category" onChange={chooseCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
