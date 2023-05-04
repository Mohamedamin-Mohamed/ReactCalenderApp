import { createElement, useState } from "react";
import { DAYS, MOCKEVENTS } from "./conts";
import { CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, StyledEvent, StyledEventDisplayer, Wrapper, EventWrapper } from "./styled";
import { checkDates, checkSameDate, range ,textFile} from "./utils";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const Calendar = () => {

  // Initialize state variables for the current month and year
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events,setEvents] = useState(MOCKEVENTS)
  const [showEvent, setShowPortal] = useState(false);
 

  // Event handler for the next month button and  to move to the next month when the "Next Month" button is clicked
  const handleNextMonth = () => {
    
    // If we're in December, go to the next year and the first month (January)
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {

      // Otherwise, just go to the next month
      setCurrentMonth(currentMonth + 1);
    }
  };

  //when previous month button is clicked, this method will be triggered
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  

  const onAddEvent = (date) =>{
    const text = window.prompt("text");
    if(text){
      setEvents((prev)=>
      [...prev, {date, title: text}]
      )
    }
    
    
    //const temp = date.toDateString().split(" ");
    //console.log(temp[1] + " " + temp[2] + " " + temp[3]);
  }
  

  // Render the header with the current month and year, and previous and next month buttons
  const renderHeader = () => {
    return (
      <CalenderHead>
        <button class="button" onClick={handlePrevMonth}>
          <ion-icon class="icon" name="arrow-back-circle-outline"></ion-icon>
        </button>
        <p>{`${new Date(currentYear, currentMonth, 1).toLocaleString("default", {
          month: "long",
        })} ${currentYear}`}</p>
        <button class="button" onClick={handleNextMonth}>
          <ion-icon class="icon" name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </CalenderHead>
    );
  };
  
  //eventdisplayer 
  function setEvent(){
    setEvents = true;
  }
  const renderEventWrapper = () =>{
    console.log("hello");
    return (
      <StyledEventDisplayer>
        <h2>event</h2>
        <p>Date</p>
      </StyledEventDisplayer>
      
    )
  }
  

  // Render the row of day of week labels (e.g. "Sun", "Mon", etc.)
  const renderDaysOfWeek = () => {
    return (
      <SevenColGrid>
        {DAYS.map((day) => (
          <HeadDay>{day}</HeadDay>
        ))}
      </SevenColGrid>
    );
  };

  // Render the days of the month as a grid, including any blank days at the start and end of the month
  const renderDaysOfMonth = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const blankDays = range(firstDayOfMonth );
    return (
      <CalenderBody>
        {blankDays.map(() => (
          <StyledDay>
          </StyledDay>
        ))}
        {range(daysInMonth).map((day) => (
          <StyledDay >
            <p>{day}</p>
            {/* check if the user are in the same date as the event and display the corresponding event */}
                        
            {
            events.map((ev) => (
                checkSameDate(new Date(currentYear,currentMonth,day),ev.date,ev) && 
                <StyledEvent><p  onClick={() => setEvent()}>{ev.title}</p><button>x</button></StyledEvent>
                
            ))}
            
            {//eventsArr.map((ev)=> <StyledEvent>{ev.title}</StyledEvent>)
            }
            <button 
            onClick={() => onAddEvent(new Date(currentYear,currentMonth,day))} 
            style={{position: "absolute", left: '40%', top: '90%',width: '20%'}}>
            add
            </button>
            {
              showEvent && <eventWrapper/>
            }
          </StyledDay>

          
          
        ))}

      </CalenderBody>

    );
  };
  // Render the entire calendar using the above helper functions
  return (
    <Wrapper>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDaysOfMonth()}
      
    </Wrapper>
  );
};

