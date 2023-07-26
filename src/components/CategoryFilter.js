import React from "react";

function CategoryFilter({categories, selectCategory}) {
  console.log(categories)

  const buttons = categories.map(category => (
    <button key={category} id={category} onClick={selectCategory}>{category}</button>
  ))

  console.log(buttons)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
