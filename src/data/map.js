export const MAP = {
  clearings: [
    {
      id: 0,
      suit: "fox",
      slots: ["open"],
      paths: [1,2,4],
      rivers: [],
      forests: [0,1],
      x: 100,
      y: 90
    },
    {
      id: 1,
      suit: "rabbit",
      slots: ["open", "open"],
      paths: [0,3],
      rivers: [2],
      forests: [0],
      x: 430,
      y: 60
    },
    {
      id: 2,
      suit: "rabbit",
      slots: ["open","ruins"],
      paths: [0,3,5],
      rivers: [1,6],
      forests: [0,1,2],
      x: 340,
      y: 190
    },
    {
      id: 3,
      suit: "mouse",
      slots: ["open", "open"],
      paths: [1,2,7],
      rivers: [],
      forests: [2,0],
      x: 685,
      y: 165
    },
    {
      id: 4,
      suit: "mouse",
      slots: ["open","open"],
      paths: [0,5,8],
      rivers: [],
      forests: [1,3],
      x: 90,
      y: 270
    },
    {
      id: 5,
      suit: "fox",
      slots: ["open", "ruins"],
      paths: [2,4,6,8,10],
      rivers: [],
      forests: [1,2,3,4,5],
      x: 255,
      y: 375
    },
    {
      id: 6,
      suit: "mouse",
      slots: ["open","open","ruins"],
      paths: [5,7,11],
      rivers: [2,10],
      forests: [2,5,6],
      x: 520,
      y: 350
    },
    {
      id: 7,
      suit: "fox",
      slots: ["open","ruins"],
      paths: [3,6,11],
      rivers: [],
      forests: [2,6],
      x: 720,
      y: 360
    },
    {
      id: 8,
      suit: "rabbit",
      slots: ["open"],
      paths: [4,5,9],
      rivers: [10],
      forests: [3,4],
      x: 95,
      y: 565
    },
    {
      id: 9,
      suit: "fox",
      slots: ["open","open"],
      paths: [8,10],
      rivers: [],
      forests: [4],
      x: 300,
      y: 630
    },
    {
      id: 10,
      suit: "mouse",
      slots: ["open","open"],
      paths: [5,9,11],
      rivers: [6,8],
      forests: [4,5],
      x: 470,
      y: 550
    },
    {
      id: 11,
      suit: "rabbit",
      slots: ["open"],
      paths: [6,7,10],
      rivers: [],
      forests: [5,6],
      x: 675,
      y: 610
    },
  ],
  forests: [
    {
      id: 0,
      clearings: [0,1,2,3],
      forests: [1,2],
      x: 410,
      y: 130
    },
    {
      id: 1,
      clearings: [0,2,4,5],
      forests: [0,2,3],
      x: 200,
      y: 225
    },
    {
      id: 2,
      clearings: [2,3,5,6,7],
      forests: [0,1,5,6],
      x: 530,
      y: 250
    },
    {
      id: 3,
      clearings: [4,5,8],
      forests: [1,4],
      x: 150,
      y: 400
    },
    {
      id: 4,
      clearings: [5,8,9,10],
      forests: [3,5],
      x: 275,
      y: 530
    },
    {
      id: 5,
      clearings: [5,6,10,11],
      forests: [2,4,6],
      x: 460,
      y: 450
    },
    {
      id: 6,
      clearings: [6,7,11],
      forests: [2,5],
      x: 640,
      y: 445
    },
  ]
}