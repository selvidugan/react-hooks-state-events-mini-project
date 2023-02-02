import { React, useState } from "react";

function CategoryFilter({ taskList, setNewTaskList, TASKS, categories }) {
  console.log(categories)
  const [theCategory, setTheCategory] = useState(" ")

  const taskCategory = (category) => {
    setTheCategory(category)
    setNewTaskList(taskList.filter((taskk) => taskk.category === category))
    if (category === "All") {
      setNewTaskList(TASKS)
    }
  }

  const categoryList = categories.map((category) => {
    const className = category === theCategory ? "selected" : null;
    const handleCategoryChange = () => {
      taskCategory(category)
    }
    return (
      <button key={category} className={className} onClick={handleCategoryChange}>
        {category}</button>
    )
  })


  return (
    <>
      <div className="categories">
        <h5>Category filters</h5>
        {categoryList}
      </div>

    </>
  );
}

export default CategoryFilter;