
import './App.css'
import DigitalClock from './components/DigitalClock/DigitalCLock'
import Countdown from './components/Countdown/Countdown'
import Stopwatch from './components/Stopwatch/Stopwatch'



function App() {

  return (

      <div className='App'>
        <DigitalClock className="comp-digitalClock"/>
        <Countdown className="comp-countdown"/>
        <Stopwatch className="comp-stopwatch"/>
      </div>

  )
}

export default App
