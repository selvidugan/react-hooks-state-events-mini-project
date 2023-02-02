import React from "react";
import Task from "./Task";


function TaskList({ tasks, handleRemove }) {
  console.log(tasks)

  const tasksList = tasks.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} handleRemove={handleRemove} />
  ))

  return (
    <>
      <div className="tasks">
        {tasksList}
      </div>
    </>
  );
}

export default TaskList;