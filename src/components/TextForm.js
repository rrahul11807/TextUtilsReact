import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked: ' + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success')

    }
    const handleLoClick = ()=>{
        //console.log('Uppercase was clicked: ' + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success");
    }
    const handleOnChange = (event)=>{
        //console.log('On change')
        setText(event.target.value)
    }
    const handleClear = () => {
      //console.log('On clear')
      setText('');
      props.showAlert("Text Cleared", "success");
    };
     const handleCopy = () => {
       //console.log('On copy')
       let Text = document.getElementById('myBox');
       Text.select();
       navigator.clipboard.writeText(Text.value);
       props.showAlert("Copied to clipboard", "success");

     };

     const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces", "success");
     }
    const [text, setText] = useState('Enter text here');
    return (
      <>
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "#01386e",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "#01386e" : "white",
                color: props.mode === "dark" ? "white" : "#01386e",
              }}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "#01386e",
          }}
        >
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length}minutes to read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </>
    );
}
