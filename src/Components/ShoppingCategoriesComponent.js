import React, { useEffect, useState } from 'react'

export function ShoppingCategoriesComponent() {
    const[category,setCategory]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=>response.json())
        .then(data=>{
            setCategory(data)
        })
    })
  return (
    <div className='container-fluid'>
        <label className='ms-2 text-primary'>Select a Category</label>
    <div >
    <select className="form-select mt-2" >
        {
        category.map(categories=>
        <option key={categories}>{categories}</option>)
        }

  </select>
  </div>
  </div>
  )
}
