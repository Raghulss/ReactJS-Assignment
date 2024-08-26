import { useEffect, useState } from 'react';
import './App.css';
import { Rating } from './Rating';
import { StonePaperScissor } from './StonePaperScissor';

const throttle = (func, delay) => {
  let timeout = false
  return (...args) => {
    if(timeout) return
    func(...args)
    timeout = true
    timeout = setTimeout(() => {
      timeout = false
    }, delay);
  }
}

function App() {
  const [text, setText] = useState('')

  useEffect(() => {
    const debouncedCall = setTimeout(() => {
      if(text.trim()) alert(text, 'is delayed by 1 second')
    }, 1000);

    return () => {
      clearTimeout(debouncedCall)
    }
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    console.log('clicked me')
  }
  const handleThrottle = throttle(handleClick, 2000)

  return (
    <div className="App">
      <div className='debounce-example'>
        <p>Debounce Check</p>
        <input placeholder='debounce check' value={text} onChange={(e) => handleChange(e)} />
        <p>For Throttle, please check browser console and the code for your reference</p>
        <button onClick={handleThrottle}>Click Me For Throttling</button>

      </div>
      <header className="App-header">
        <StonePaperScissor />
        <Rating />
      </header>
    </div>
  );
}

export default App;
