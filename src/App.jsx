import React, { useState, useEffect } from 'react'
import Header from './component/Header'
import InputComponent from './component/InputComponent'
import ViewComponent from './component/ViewComponent'
import FinalView from './component/FinalView'
import './css/App.css'

const App = () => {
  const [queue, setQueue] = useState([]);
  const [displayedElement, setDisplayedElement] = useState('');
  const [polledElements, setPolledElements] = useState([]);
  //Add element to queue
  const addToQueue = (item) => {
    setQueue((prevQueue) => [...prevQueue, item]);
  };

  //Remove element from queue
  const pollQueue = () => {
    if (queue.length > 0) {
      const element = queue.shift();
      setDisplayedElement(element);
      setPolledElements((prevElements) => [...prevElements, element]);
    }
  };

  //Time Interval
  useEffect(() => {
    const intervalId = setInterval(pollQueue, 10000);

    return () => clearInterval(intervalId);
  }, [queue]);

  //Queue empty alert
  const endProcess = () => {
    if (queue.length === 0) {
      alert('Success! Queue is empty.');
    } else {
      const intervalId = setInterval(() => {
        if (queue.length === 0) {
          clearInterval(intervalId);
          alert('Success! Queue is empty.');
        }
      }, 1000);
    }
  };

  //Reset All
  const resetAll = () => {
    setQueue([]);
    setPolledElements([]);
    setDisplayedElement('');
  };

  return (
    // Header Component
    <div className="container">
  <div className="row">
    <div className="col">
      <Header />
    </div>
  </div>

  {/* Input component(1,2) and View component(3) */}
  <div className="row">
    <div className="col-md-6">
      <div className="row">
        <div className="col">
          <InputComponent onAddToQueue={addToQueue} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ViewComponent queue={queue} />
        </div>
      </div>
    </div>

    {/* Final view component(4,5,6) */}
    <div className="col col-md-6 finalview">
      <FinalView
        polledElements={polledElements}
        onEndProcess={endProcess}
        onResetAll={resetAll}
      />
    </div>
  </div>
</div>


  );
};

export default App;
