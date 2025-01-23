//onChange = event handler used primarily with from elements
//  ex.<input>, <textarea>,<select>,<radio>
// Triggers a function every time the value of the input changes





import React, {useState} from 'react';

function MyComponent(){
  const [name, setName] = useState("");
  const [number, setNumeber] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");


  function nameChange(event){
    setName(event.target.value);

  }

  function numberChange(event){
    setNumeber(event.target.value);
  }

  function commentChange(event){
    setComment(event.target.value);
  }
  function paymentChange(event){
    setPayment(event.target.value);
  }
  function shippingChange(event){
    setShipping(event.target.value);
  }


  return(
    <div className="name">
      <input value={name} onChange={nameChange} />
      <p>Name: {name}</p>
      <input type="number" value={number} onChange={numberChange} />
      <p>Number: {number}</p>

      <textarea value={comment} onChange={commentChange}
      placeholder= "Enter a Delivery Instruction"/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={paymentChange}>
        <option value="">Select an Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick Up" 
        checked={shipping === "Pick Up"} 
        onChange={shippingChange}/>
        Pick Up
      </label><br />
      <label >
        <input type="radio" value="Delivery"
        checked={shipping === "Delivery"}
        onChange={shippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>

    </div>
  )
}

export default MyComponent;