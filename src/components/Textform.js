import React, { useState } from 'react'

export default function Textform(props) {
const [text, setText] = useState('Enter Text Here');

const handleUpperCaseClick = () => {
    setText(text.toUpperCase());
    props.alertMessage('Function Triggered:', 'Converted to Upper Case', 'primary')
}

const handleOnChange = (event) => {
    setText(event.target.value)
}

  return (
    <>
    <div className='container my-3 rounded'  style={{backgroundColor: props.mode==='light'?'grey':'black'}}>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.title}</label>
        <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3">
        <h3 className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Your Summary</h3>
        <p className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Total number of characters: {text.split(" ").length}</p>
    </div>

    </>
  )
}
