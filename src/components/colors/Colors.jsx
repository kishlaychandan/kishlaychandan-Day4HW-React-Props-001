import React from "react";
import "./Colors.css";
import Card from "../card/Card";
const arr = [
  { "color":"#FF6663","name": "PINK" },
  { "color":"#333333","name": "GRAY" },
  { "color":"#000000","name": "BLACK" },
  { "color":"#38BB14","name": "GREEN" },
  { "color":"#C90B0B","name": "RED" },
  { "color":"#FF8000","name": "ORANGE" },
  { "color":"#FFF500","name": "YELLOW" },
  { "color":"#CCCCCC","name": "WHITE GRAY" },
  { "color":"#7E41A2","name": "PURPLE" },
  { "color":"#C14911","name": "BROWN" },
];

function colors() {
  return (
    <>
      <div className="main">
        <h1 className="heading">COLORS CARD</h1>
        <hr />
        <div className="cards">
          {arr.map((item)=>{
            console.log(item);
            return(
              <Card color={item}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default colors;
