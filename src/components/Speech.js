import React, { useState } from "react";

const Speech = (props) => {
    const [text, setText] = useState('');

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking", "success");
    }

    const stopSpeak = () => {
        window.speechSynthesis.cancel();
        props.showAlert("Stopped speaking", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Text-to-Speech</h1>
            
            <div className="my-3">
                <h3>What is speech synthesis?</h3>
                <p>It is the artificial production of human speech. A computer system used for this purpose is called a speech synthesizer, which converts normal language text into speech.</p>
                
                <h3>Use cases:</h3>
                <ul>
                    <li><strong>Accessibility:</strong> Great for visually impaired users.</li>
                    <li><strong>Listening instead of reading:</strong> Consume content while multitasking or resting your eyes.</li>
                </ul>
            </div>

            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#282f50' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} rows="8" placeholder="Enter your text to hear it spoken..."></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={speak}>Speak</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={stopSpeak}>Stop</button>
        </div>
    );
};

export default Speech;
