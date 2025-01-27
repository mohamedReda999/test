import React,{useState} from 'react';

function ColorPicker(){
  const [color,setColor]= useState("");

  function ColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1 className='hh'>Color Picker</h1>
      <div className="color-display" style={{background: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={ColorChange} />
    </div>
  )
}

export default ColorPicker;