import React, { useState } from "react";
import "./Item.css"

const Item = props => {
  const item = props.item
  const [active, setActive] = useState(1);

  const handleChick = () => {

   if (active === 0){
    setActive(1);
   }
   else{
    setActive(0);
   }
  }
  console.log(active);
  return (

  <div onClick = {handleChick} className = {active === 1 ? "active" : "hidden"}>
    {item}
  </div>
  )
}

export default Item;