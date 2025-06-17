import './App.css';
import { useState } from 'react';
import Footer from './Footer.jsx';

function App() {
  const [count, setCount] = useState(0);

  const up = () => {

    setCount((count + 1) );
  }

  const down = () => {
    setCount((count - 1) );
  }

  const reset = () => {
    setCount(0);
  }
 

  return (
    <>
      <p>{count}</p>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    <button onClick={reset}>reset</button>
    <Footer/>
    </>
  );
}

export default App;
