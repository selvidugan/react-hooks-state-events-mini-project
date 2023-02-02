import React from "react";


function Task({ text, category, handleRemove }) {
  console.log(text)
  console.log(category)

  const handleRemoveText = () => {
    handleRemove(text)
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemoveText}>X</button>
    </div>
  );
}

export default Task;