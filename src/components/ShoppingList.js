import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [name,setName] = useState('')
  const [category,setCategory] = useState('Produce')
  const[foodItems, setFoodItems] = useState(items)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
function onItemFormSubmit(){
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: name,
    category: category
  };
  setFoodItems([...foodItems, newItem])
}
  function handleSearchChange(event){
  setSearch(event.target.value)
  }

  const itemsToDisplay = foodItems.filter((item) => {
    if (selectedCategory === "All" && search === '') return true;

    else if(selectedCategory === "All" && search === item.name ){
      return (item.name);
    }
    else if(selectedCategory === item.category && search === ''){

      return (selectedCategory);
    }
    return(selectedCategory === item.category && search === item.name)
  });

  return (
    <div className="ShoppingList">
      <ItemForm name={name} category={category} onItemFormSubmit={onItemFormSubmit} setCategory={setCategory} setName={setName}/>
      <Filter search={search} onCategoryChange={handleCategoryChange}  onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}

      </ul>
    </div>
  );
}

export default ShoppingList;
