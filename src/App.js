
import { useState } from "react";
import { Calendar } from "./Calender";
import "./styles.css";


function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (date, text) => {
    const todo = { date, title: text };

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then(response => {
        if (response.ok) {
          console.log('Todo created successfully');
          
          setEvents(prev => [...prev, todo]);
        } else {
          console.error('Failed to create todo');
        }
      })
      .catch(error => {
        console.error('Error creating todo:', error);
      });
  };

  return (
    <div className="App">
      <Calendar eventsArr={events} addEvent={addEvent} />
    </div>
  );
}

export default App;
