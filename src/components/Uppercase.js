import React, { useState } from "react";

const Uppercase = (props) => {
    const [text, setText] = useState('');

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Uppercase Text</h1>
            
            <div className="my-3">
                <h3>What is uppercase text?</h3>
                <p>Uppercase text is text where all letters are capitalized (e.g., HELLO WORLD).</p>
                
                <h3>When to use it?</h3>
                <p>It is commonly used for titles, headings, acronyms, or for adding emphasis to text.</p>
                
                <p><strong>Example:</strong> hello world → HELLO WORLD</p>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
        </div>
    );
};

export default Uppercase;
