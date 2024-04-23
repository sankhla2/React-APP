import './App.css';
import { useEffect, useState } from 'react'; // Import the useState hook from React

function App() {
  const [time, setTime] = useState(0); // Create a state variable called time and a function called setTime to update it
  const [running, setRunning] = useState(false); // Create a state variable called running and a function called setRunning to update it

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [running])
  return (
    <div className='max-w-md flex-col items-center'>
      <h1 className = 'px-10' >Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2) }:</span> 
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2) }</span>

      </div>
      <div>
        <button onClick= {() => { setRunning(true) }}> Start</button>
        <button onClick= {() => { setRunning(false) }}> Stop</button>
        <button onClick= {() => { setTime(0)}}> Reset</button>
      </div>
    </div>


  );
}

export default App;
