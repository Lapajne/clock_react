import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import AlarmForm from './AlarmForm' 

function App() {
  const [alarmTime, setAlarmTime] = useState<string>("");

  return (
    <>
      <div>
        <AlarmForm alarmTime={alarmTime} changeAlarmTime={setAlarmTime}/>
      </div>
      <br />
      <div>
        <Clock alarmTime={alarmTime}/>
      </div>
    </>
  )
}

export default App
