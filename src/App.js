import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // getting the url path for a webpage using javascript.
  const newURL = `${window.location.protocol}//${window.location.host}/${window.location.pathname}/${window.location.search}`;

  const IncrementCount = () => {
    setCount(count + 1);
  }

  const DecrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Count Incrementer, Decrementer</h1>
      <p className="count-p">{count}</p>
      <div className="buttons-div">
        <button type="button" onClick={DecrementCount}>Decremment</button>
        <button type="button" onClick={IncrementCount}>Incremment</button>
      </div>
      <h3>the URL got from the window is: {newURL}</h3>
    </div>
  );
};

export default App;
