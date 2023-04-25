import { useState } from "react";
import { DAYS } from "./conts";
import { CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, Wrapper } from "./styled";
import { range } from "./utils";

export const Calendar = () => {

  // Initialize state variables for the current month and year
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

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

  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

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
          <StyledDay></StyledDay>
        ))}
        {range(daysInMonth).map((day) => (
          <StyledDay>{day}</StyledDay>
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

