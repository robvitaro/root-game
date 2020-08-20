import React from 'react';
import './App.css';
import {MAP} from './data/map'

function App() {

  const drawLinesFromTo = (setA, what, setB, color, width) => {
    return (
       setA.map(a => {
        return (
          a[what].map(w => {
            let x1 = a.x
            let y1 = a.y
            let destination = setB[w]
            let x2 = destination.x
            let y2 = destination.y
            return <line x1={x1} y1={y1} x2={x2} y2={y2}  stroke={color} stroke-width={width}/>
          })
        )
      })
    )
  }

  let pathLines = drawLinesFromTo(MAP.clearings, 'paths', MAP.clearings, 'black', '5')
  let riverLines = drawLinesFromTo(MAP.clearings, 'rivers', MAP.clearings, 'blue', '15')
  // let clearingToForestLines = drawLinesFromTo(MAP.clearings, 'forests', MAP.forests, 'grey', '3')
  // let forestToClearingLines = drawLinesFromTo(MAP.forests, 'clearings', MAP.clearings, 'white', '1')
  // let forestToForestLines = drawLinesFromTo(MAP.forests, 'forests', MAP.forests, 'green', '3')

  let clearings = MAP.clearings.map((clearing) =>{
    let color = null
    switch(clearing.suit) {
      case "rabbit": 
        color = "yellow"
        break
      case "mouse":
        color = "orange"
        break
      case "fox":
        color = "red"
        break
      default:
        color = "blue"
        break
    }
    return <circle cx={clearing.x} cy={clearing.y} r="40" fill={color} />
  })

  let slotBoxes = MAP.clearings.map((clearing) => {
    const slots = clearing.slots.map((slot, index) => {
      let x = clearing.x - 35 + (index * 25)
      let y = clearing.y - 10
      return <rect className={slot} x={x} y={y} rx="5" ry="5" width="20" height="20" stroke="black" stroke-width="1"/>
    })
    return slots
  })


  return (
    <div>
      <svg height="700" width="800">
        {/* {clearingToForestLines} */}
        {/* {forestToClearingLines} */}
        {/* {forestToForestLines} */}
        {pathLines}
        {riverLines}
        {clearings}
        {slotBoxes}
      </svg>
      
    </div>
  );
}

export default App;
