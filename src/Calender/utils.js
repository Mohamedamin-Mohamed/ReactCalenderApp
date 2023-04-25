import { DAYS } from "./conts";
import { StyledEvent } from "./styled";

export const range = (end) =>{
    const {result} = Array.from({length: end}).reduce(
    ({result,current}) => ({
    result: [...result,current],
    current: current +1
    }),
    {result: [], current: 1}
);

return result;
};

export const checkDates = (date) => {
  const d = date.toDateString().split(" ")[1];
  return d;
  //return `${d[1]} ${d[3]}`;
};

export const checkSameDate = (first,second,obj) => {
  const firstDate = first.toDateString().split(" ");
  const secondDate = second.toDateString().split(" ");

  console.log(firstDate[1]);
  console.log(secondDate[1]);
  if(firstDate[1] === secondDate[1] && firstDate[3] === secondDate[3] && firstDate[2] == secondDate[2]){
    console.log("working");
  }
  
  return firstDate[1] === secondDate[1] &&
  firstDate[2] === secondDate[2] &&
  firstDate[3] === secondDate[3];

}
