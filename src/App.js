import { useState } from "react";
import { Calendar } from "./Calender";
import { MOCKEVENTS } from "./Calender/conts";
import "./styles.css";

function App() {
  const[events,setEvents] = useState(MOCKEVENTS)

  const addEvent = (date,text) =>{
    setEvents(prev => [...prev],{date,title: text});

  }
  return <div calssName="App">
    <Calendar eventsArr={MOCKEVENTS} addEvent={addEvent}/>
  </div>
}

export default App;
