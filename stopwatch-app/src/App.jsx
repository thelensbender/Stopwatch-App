import { useState, useEffect } from 'react'
import './App.css'
import Display from './components/Display'
import Button from './components/Button'

function App() {
  const [startClicked, setStartClicked] = useState(false)
  const [hourCount, setHourCount] = useState(0)
  const [minuteCount, setMinuteCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)
  useEffect(()=>{
    if (!startClicked) return;
    const interval = setInterval(()=>{
      setSecondCount(prevSec => {
        if (prevSec < 59) {
          return prevSec + 1
        } else {
          setMinuteCount(prevMin => {
            if (prevMin < 59) {
              setSecondCount(0)
              return prevMin + 1
            } else {
              setHourCount(prevHr => {
                setSecondCount(0)
                setMinuteCount(0)
                return prevHr + 1;
              })
            }
          })
        }
      })
      }, 1000);
    return ()=> clearInterval(interval)
  }, [startClicked, setSecondCount, setMinuteCount, setHourCount])
    

  return (
    <div className="flex flex-col justify-center m-20 p-30 shadow-lg/90 bg-blue-200">
      <Display secondCount={secondCount} minuteCount={minuteCount} hourCount={hourCount}/>
      <Button startClicked={startClicked} setStartClicked={setStartClicked} setHourCount = {setHourCount} setMinuteCount = {setMinuteCount} setSecondCount = {setSecondCount}/>
    </div>
  )
}

export default App
