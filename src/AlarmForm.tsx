export default function AlarmForm({alarmTime, changeAlarmTime}: {alarmTime: string; changeAlarmTime: (time: string) => void;}): JSX.Element {

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeAlarmTime(event.target.value);
    console.log("Alarm set for:", event.target.value);
  };  
 
  return (
    <>
      Set alarm for: <input type="time" value={alarmTime} onChange={handleTimeChange}/>
    </>
  )
}
