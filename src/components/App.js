import { React, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ TASKS });
console.log({ CATEGORIES })

function App() {
  const [taskList, setNewTaskList] = useState(TASKS)


  const handleRemove = (taskk) => {
    console.log("this is " + taskk)
    setNewTaskList(taskList.filter(task => task.text !== taskk))
  }

  const onTaskFormSubmit = (taskk) => {
    setNewTaskList([...taskList, taskk])
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} taskList={taskList} setNewTaskList={setNewTaskList} TASKS={TASKS} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={taskList} handleRemove={handleRemove} />
    </div>
  );
}

export default App;