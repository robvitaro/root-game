import React from 'react';
import { MAP } from '../data/map'
import { suitColor } from '../util/util'

const Map = (props) => {
  const drawLinesFromTo = (setA, what, setB, color, width) => {
    return (
       setA.map((a, aIndex) => {
        return (
          a[what].map((w, wIndex) => {
            let x1 = a.x
            let y1 = a.y
            let destination = setB[w]
            let x2 = destination.x
            let y2 = destination.y
            return <line key={`${what}-${aIndex}-${wIndex}`} x1={x1} y1={y1} x2={x2} y2={y2}  stroke={color} strokeWidth={width}/>
          })
        )
      }).flat()
    )
  }

  let pathLines = drawLinesFromTo(MAP.clearings, 'paths', MAP.clearings, 'black', '5')
  let riverLines = drawLinesFromTo(MAP.clearings, 'rivers', MAP.clearings, 'blue', '15')
  // let clearingToForestLines = drawLinesFromTo(MAP.clearings, 'forests', MAP.forests, 'grey', '3')
  // let forestToClearingLines = drawLinesFromTo(MAP.forests, 'clearings', MAP.clearings, 'white', '1')
  // let forestToForestLines = drawLinesFromTo(MAP.forests, 'forests', MAP.forests, 'green', '3')

  let clearingCircles = MAP.clearings.map((clearing, index) =>{
    const color = suitColor(clearing.suit)
    return <circle key={`clearing-${index}`} cx={clearing.x} cy={clearing.y} r="40" fill={color} />
  })

  let slotBoxes = MAP.clearings.map((clearing, cIndex) => {
    const slots = clearing.slots.map((slot, sIndex) => {
      let x = clearing.x - 35 + (sIndex * 25)
      let y = clearing.y - 10
      return <rect key={`slot-${cIndex}-${sIndex}`} className={slot} x={x} y={y} rx="5" ry="5" width="20" height="20" stroke="black" strokeWidth="1"/>
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
        {clearingCircles}
        {slotBoxes}
      </svg>
    </div>
  )
}

export default Map;