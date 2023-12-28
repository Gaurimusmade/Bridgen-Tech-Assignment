// FinalView.js
import React from 'react';

const FinalView = ({ polledElements, onEndProcess, onResetAll }) => {
  return (
    <div className='mt-3'>
      <ul className={`list-group ${polledElements.length > 0 ? 'mb-3' : ''}`}>
          {polledElements.map((element, index) => (
            <li className="list-group-item overflow-hidden w-100" 
            style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            key={index}>{element}</li>
          ))}
        </ul>
    <div className="row">
        <div className="col">
      <button type="button" className="btn btn-outline-secondary w-75" onClick={onEndProcess}>End</button>
      </div>
      <div className="col">
      <button type="button" className="btn btn-outline-danger w-75" onClick={onResetAll}>Reset</button>
      </div>
      </div>
    </div>
  );
};

export default FinalView;
