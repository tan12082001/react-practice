import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // getting the url path for a webpage using javascript.
  const newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}`;

  const IncrementCount = () => {
    setCount(count + 1);
  }

  const DecrementCount = () => {
    setCount(count - 1);
  }

  // using useEffect hook to get the continous time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(timer)
  }, []);

  // getting time using JavaScript method.
  let displayTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  const hours = time.getHours();

  return (
    <div className="App">
      <h1>Count Incrementer, Decrementer</h1>
      <p className="count-p">{count}</p>
      <div className="buttons-div">
        <button type="button" onClick={DecrementCount}>Decremment</button>
        <button type="button" onClick={IncrementCount}>Incremment</button>
      </div>
      <h3>the URL got from the window is: {newURL}</h3>
      <div className="display-time-div">
        <p>The current time is: {displayTime}</p>
        <h4>Have a Good {(hours > 12) ? 'Evening!' : 'Morning!'}</h4>
      </div>
    </div>
  );
};

export default App;
