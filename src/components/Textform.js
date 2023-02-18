import React, { useState } from 'react'



export default function Textform(props) {
const [text, setText] = useState('Enter Text Here');

const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
}

const handleOnChange = (event) => {
    setText(event.target.value)
}

  return (
    <>
    <div className='container my-3'>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
        <h3>Your Summary</h3>
        <p>Total number of characters: {text.split(" ").length}</p>
    </div>

    </>
  )
}
