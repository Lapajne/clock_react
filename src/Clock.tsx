import { useState, useEffect } from 'react'

export default function Clock({alarmTime}: {alarmTime: string;}): JSX.Element {

  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const _timer: NodeJS.Timeout = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString()
      setTimeString(currentTime);

      var currentHoursMinutes: string = currentTime.substring(0, 5);

      if (currentHoursMinutes === alarmTime) {
        alert("ALARM!!!");
        alarmTime = ""; // Reset alarm time after alert
      }
    }, 1000);

    return () => clearInterval(_timer);
  }, [alarmTime]); // Re-run effect if alarmTime change
  
  return (
    <>
      {timeString}
    </>
  ) 
}
