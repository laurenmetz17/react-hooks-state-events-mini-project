import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  function selectCategory(event) {

    let buttons = event.target.parentNode.children;
    console.log(event.target.id)
    for(let button of buttons) {
      if (button.id === event.target.id) {
        button.classList.add('selected')
      }
      else {
        button.classList.remove('selected');
      }
    }
    if (event.target.id === "All") {
      setTasks(TASKS)
    }
    else {
      const categoryTasks = TASKS.filter(task => task.category === event.target.id); //using key here instead doesnt work why?
      console.log(categoryTasks)
      setTasks(categoryTasks);
    }
  }

  function handleDelete(event) {
    const newTasks = tasks.filter(task=> task.text !== event.target.id)
    setTasks(newTasks);
  }

  function onTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {text: details, category: category}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectCategory={selectCategory}/>
      <NewTaskForm categories={CATEGORIES} details={details}  setDetails= {setDetails} setCategory={setCategory} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
