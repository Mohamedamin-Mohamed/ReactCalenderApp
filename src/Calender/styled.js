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
    background: teal;
    font-size: 1.2rem;
`
export const CalenderBody = styled.div`
    height: calc(100% - 27px - 40px);
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(5,1fr);
`

export const StyledDay = styled.span`
position: relative;
display: block;
border: 1px solid;
text-align: right;
padding: 3px;
`

export const StyledEvent = styled.span`
*{
    display:inline-block;
    margin-bottom:5px;
}
p{
width: 90%;
test-align: left;
background: teal;
color: white;
padding: 2px 5px;
border-radius: 8px;
}
button{
    height:15%;
    width:10%;
}
`

export const StyledEventDisplayer = styled.span`
position: absolute;
background: white;
width: 40%;
height: 20%;
padding: 40px;
top: 40%;
left: 30%;
color: red;
border: 2px solid rgba(100, 100, 100, 1);
border-radius: 4px;
box-shadow: 3px 5px 0px 0px rgba(0, 0, 0, 0.3);


`

