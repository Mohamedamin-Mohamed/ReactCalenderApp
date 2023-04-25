import { Calendar } from "./Calender";
import { MOCKEVENTS } from "./Calender/conts";
import "./styles.css";

function App() {
  return <div calssName="App">
    <Calendar eventsArr={MOCKEVENTS}/>
  </div>
}

export default App;
