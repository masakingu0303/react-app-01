import './App.css';
import { useRef } from 'react';

function App() {
  const ref = useRef()

  return (
    <>
      <input type="text" ref={ref} /> 
      <button onClick={() => ref.current.focus()}>
        button
      </button>
    </>
  );
}

export default App;
