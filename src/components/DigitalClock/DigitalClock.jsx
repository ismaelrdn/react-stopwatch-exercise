import React, { useEffect, useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {

    const [ clockState, setCloclState] = useState();
    
    useEffect(() => {
        setInterval (()=> {
            const date = new Date();
            setCloclState(date.toLocaleTimeString())
        }, 1000 );
    }, []);

  return (
    <div className="digital-clock">
        <h2 className="digital-clock__h2">{clockState}</h2>
    </div>
  )
}

export default DigitalClock