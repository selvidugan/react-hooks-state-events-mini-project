import { React, useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  console.log("hello this is " + categories)

  const [text, setText] = useState(" ");
  const [category, setCategory] = useState(" All ");

  const categoryList = categories.map((category) => {
    console.log(category)
    return (
      <option key={category}>
        {category}
      </option>
    )
  })

  const handleAdd = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
    setCategory(' All ')
  }


  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleAdd}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;