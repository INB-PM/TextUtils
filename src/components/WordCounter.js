import React, { useState } from "react";

const WordCounter = (props) => {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordCount = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
    const charCount = text.length;

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Word Counter</h1>
            
            <div className="my-3">
                <h3>How word count works?</h3>
                <p>It counts the number of individual words separated by spaces or newlines.</p>
                
                <h3>Where is it useful?</h3>
                <ul>
                    <li><strong>Essays & Assignments:</strong> Keeping track of minimum or maximum word limits.</li>
                    <li><strong>Blogs & Articles:</strong> Determining reading time and content length.</li>
                    <li><strong>SEO:</strong> Search engines favor content of certain lengths.</li>
                </ul>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text here..."></textarea>
            </div>
            
            <div className="card my-3" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="card-body">
                    <h5 className="card-title">Live Summary</h5>
                    <p className="card-text"><strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters.</p>
                    <p className="card-text"><strong>{0.008 * wordCount}</strong> Minutes read</p>
                </div>
            </div>
        </div>
    );
};

export default WordCounter;
