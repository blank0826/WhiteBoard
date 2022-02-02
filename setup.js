let cTool = "pencil";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d"); //essentially this gives tool to work, makes drawing 2d
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight; //depends on the window available or the screen which we see
canvasBoard.width = window.innerWidth;
tool.strokeStyle = "lightpink";
// this line gives you the tool to draw on that canvas

// rectangle top left part is 0,0
// tool.fillStyle = "green"; // this changes the brush color to green
// tool.fillRect(10, 30, 200, 200); //rectangle build
// tool.strokeStyle = "red"; // fill colour in the border of the rectangle
// tool.strokeRect(50, 50, 200, 200); // create empty rectangle
