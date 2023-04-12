import { DAYS } from "./conts"
import { CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, Wrapper } from "./styled"
import {range} from "./utils";

export const Calendar = () =>{
    return <Wrapper>
        <CalenderHead>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        <p>Apr 2023</p>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </CalenderHead>
        <SevenColGrid>
            {DAYS.map((day) => (
                <HeadDay>{day}</HeadDay>
            ))}
        </SevenColGrid>
            <CalenderBody>
                {range(31).map((day) => (
                <StyledDay>{day}</StyledDay>
                ))}
            </CalenderBody>
        
    </Wrapper>
}