// InputComponent.js
import React, { useState } from 'react';

const InputComponent = ({ onAddToQueue }) => {
    const [inputText, setInputText] = useState('');

    const handleAddToQueue = () => {
        if (inputText.trim() !== '') {
            onAddToQueue(inputText.trim());
            setInputText('');
        }
    };

    return (
        <div className='mt-3 mb-3'>
            <div className="row">
            <div className="form-group col-md-8">
                <input type="text"
                    className="form-control"
                    placeholder="Enter Text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)} />
            </div>
            <div className="d-grid col-6 col-md-4 mx-auto">
            <button type="button" className="btn btn-outline-primary" onClick={handleAddToQueue}>Add</button>
            </div>
            </div>
        </div>
    );
};

export default InputComponent;
