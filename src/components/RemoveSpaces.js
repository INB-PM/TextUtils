import React, { useState } from "react";

const RemoveSpaces = (props) => {
    const [text, setText] = useState('');

    const handleExtraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra spaces", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Remove Extra Spaces</h1>
            
            <div className="my-3">
                <h3>Why are extra spaces bad?</h3>
                <p>Extra spaces make text look unpolished, break formatting on web pages, and can cause issues when parsing data.</p>
                
                <h3>When is it useful?</h3>
                <p>It is very useful for clean formatting, cleaning up copy-pasted text, and writing clean code without redundant whitespaces.</p>
                
                <p><strong>Example:</strong> Hello&nbsp;&nbsp;&nbsp;&nbsp;world → Hello world</p>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraspace}>Remove Extra Spaces</button>
        </div>
    );
};

export default RemoveSpaces;
