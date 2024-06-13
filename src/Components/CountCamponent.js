import { useState } from "react"

export function CountComponent() {
  const[count,setcount]=useState(0);

  function handleIncrease() {
    setcount(count+1)
  }
  function handleDecrease() {
    setcount(count-1)
    
  }
    return(<div className="container-fluid">
        <button className="bi bi-hand-thumbs-up btn btn-primary m-2" onClick={handleIncrease}>  Like {count}</button>
        <button className="bi bi-hand-thumbs-down btn btn-danger m-2" onClick={handleDecrease}>  Dislike {count}</button>
    </div>)
}