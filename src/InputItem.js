import React, { useState } from "react";
import Item from "./Item.js"

const InputItem = props => {
  const [cart, setCart] = useState([]);

  const handleKeyPress = e => {
    if (e.charCode !== 13) {
      return;
    }
    const oldCart = [...cart, e.target.value]
    setCart(oldCart);
    e.target.value = ""
    console.log(cart)
  };

const itemsList = cart.map((item, ind) => {return <Item key={ind} item = {item}/>})

 return(
  <div>
    <input type="text" placeholder="Type in the item" onKeyPress={handleKeyPress} />
    <div style={{
      margin: 0
    }}>
    {itemsList}
    </div>
  </div>
 );
}

export default InputItem