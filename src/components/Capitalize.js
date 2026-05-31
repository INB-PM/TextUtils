import Ads from "./Ads";
import React, { useState } from "react";

const Capitalize = (props) => {
    const [text, setText] = useState('');

    const handleCapitalise = () => {
        const lowerCase = text.toLowerCase();
        if (lowerCase.length > 0) {
            const handle = lowerCase[0].toUpperCase() + lowerCase.slice(1);
            setText(handle);
            props.showAlert("Converted to Capitalize", "success");
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Capitalize Text</h1>

            <Ads slot="2012763318" />
            
            <div className="my-3">
                <h3>What is capitalized text?</h3>
                <p>Capitalized text typically means the first letter of a sentence or word is in uppercase, while the rest remains lowercase.</p>
                
                <h3>When to use it?</h3>
                <p>It is used for the start of a sentence or for proper nouns (names, places, etc.).</p>
                
                <p><strong>Example:</strong> hello world → Hello world</p>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleCapitalise}>Capitalize</button>
        </div>
    );
};

export default Capitalize;
