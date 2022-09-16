import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange,search }) {
  
  return (
    <div className="Filter">
      <input type="text" name="search" value={search} onChange={onSearchChange} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
