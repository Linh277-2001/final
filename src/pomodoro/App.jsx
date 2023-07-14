import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [workTime, setWorkTime] = useState(10);
  const [relaxTime, setRelaxTime] = useState(10);
  const [work, setWork ]= useState(workTime);
  const [relax, setRelax]= useState(relaxTime);
  const [isRunning, setIsrunning]= useState(true);
  const [isWorking, setIsWorking] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  function timeStr(seconds) {
    let hours = Math.floor(seconds / 3600);
    let remainder = seconds % 3600;
    let minutes = Math.floor(remainder / 60);
    remainder = remainder % 60;
    let _seconds = remainder;
    return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0'+_seconds).slice(-2)}`
  }

  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        if (isWorking) {
          if (work > 0) {
            setWork(work - 1);
          } else {
            setIsWorking(false);
            setRelax(relaxTime);
          }
        } else {
          if (relax > 0) {
            setRelax(relax - 1);
          } else {
            setIsWorking(true);
            setWork(workTime);
          }
        }
      }, 1000);
    }
  }, [work, relax, isRunning, isWorking]);

  const pause =()=>{
    setIsrunning(false);
  }
  const start =()=>{
    setIsrunning(true);
  }

  return (
    <div className='wrap'>
      <p style={{marginTop:25}}>Pomodoro</p>
      <p>{currentTime.toLocaleTimeString()}</p>
      <div className={work > 0 ? "container_work":"container_relax"}>
        <div className="time">
          <div className="time-work">Work Time</div>
          <div className="time-work">Relax Time</div>
        </div>
        <div className="time">
          <div className="time-work">{timeStr(work)}</div>
          <div className="time-work">{timeStr(relax)}</div>
        </div>
        <button className="start-button button"  onClick={()=>start()}>
          Start
        </button>
        <button className="pause-button button" onClick={() =>pause()} >
          Pause
        </button>
        <div>
          <div>
            <input
                style={{fontSize:"20px"}}
                type="number"
                value={workTime}
                onChange={(e) => setWorkTime(parseInt(e.target.value))}
              />
          </div>
          <div>
            <button className='button' onClick={() => setWorkTime(workTime)}>Change</button>
          </div>
          <div>
            <input
                style={{fontSize:"20px"}}
                type="number"
                value={relaxTime}
                onChange={(e) => setRelaxTime(parseInt(e.target.value))}
              />
          </div>
          <div>
            <button className='button' onClick={() => setRelaxTime(relaxTime)}>Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

