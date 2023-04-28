import styled from "styled-components";

export const Wrapper =  styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid;
    margin: 5px;
`;


export const CalenderHead = styled.div`
    width: 100%;   
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    font-size: 24px;
`

export const SevenColGrid = styled.div`
    width: 100%;
    height: 27px;
    display: grid;
    grid-template-columns: repeat(7,1fr)
`
export const HeadDay = styled.span`
    text-align: center;
    background: red;
    font-size: 1.2rem;
`
export const CalenderBody = styled.div`
    height: calc(100% - 27px - 40px);
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(5,1fr);
`

export const StyledDay = styled.span`
border: 1px solid;
text-align: right;
padding: 3px;
`

export const StyledEvent = styled.span`
display: grid;
test-align: left;
background: darkblue;
color: white;
padding: 2px 5px;
border-radius: 8px;

`

export const StyledEventDisplayer = styled.span`
position: absolute;
width: 50%;
height: 40%;
padding: 40px;
top: 30%;
left: 25%;
color: red;
border: 2px solid rgba(100, 100, 100, 1);
border-radius: 4px;
box-shadow: 3px 5px 0px 0px rgba(0, 0, 0, 0.3);

`

export const EventWrapper = styled.span`
position: absolute;
width: 50%;
height: 40%;
padding: 40px;
top: 30%;
left: 25%;
color: red;
border: 2px solid rgba(100, 100, 100, 1);
border-radius: 4px;
box-shadow: 3px 5px 0px 0px rgba(0, 0, 0, 0.3);

`