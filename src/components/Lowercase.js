import React, { useState } from "react";
import Ads from "./Ads";


const Lowercase = (props) => {
    const [text, setText] = useState('');

    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Lowercase Text</h1>
            <Ads slot="2012763318" />

            
            <div className="my-3">
                <h3>What is lowercase text?</h3>
                <p>Lowercase text is text where all letters are in their small form, without any capitalization.</p>
                
                <h3>When to use it?</h3>
                <p>It is used in normal sentences, regular paragraph text, and generally improves readability for long bodies of text.</p>
                
                <p><strong>Example:</strong> HELLO → hello</p>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleLowclick}>Convert to Lowercase</button>
        </div>
    );
};

export default Lowercase;
