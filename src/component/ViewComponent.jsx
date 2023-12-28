// ViewComponent.js
import React from 'react';

const ViewComponent = ({ queue }) => {
  return (
    <ul className={`list-group ${queue.length > 0 ? 'mb-3' : ''}`}>
    {queue.map((item, index) => (
      <li className="list-group-item overflow-hidden w-100" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} key={index}>{item}</li>
    ))}
  </ul>
  
  );
};

export default ViewComponent;
