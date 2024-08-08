import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'
const AutoWriter = () => {

  const handleType = (count) => {
    console.log(count);
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  }

  return (
    <div className='auto-writer'>
      <h1 className="roling-text" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '} 
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>  Life is simple.
      </h1>
    </div>
  )
}

export default AutoWriter;
