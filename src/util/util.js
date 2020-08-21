export const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export const suitColor = (suit) => {
  switch(suit) {
    case "bird": 
     return "blue"
    case "fox":
      return "red"
    case "mouse":
      return "orange"
    case "rabbit":
        return "yellow"  
    default:
      return "white"
  }
}