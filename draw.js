// getBoundingClientRect() this contains all the porperties surrounding a node
// this is so that lines sab same hi position par aaye rather icons ki wajah se positioning change naa ho so this will get get positions of the board
let boardTop = canvasBoard.getBoundingClientRect().top; // top is vertical distance from top left corner
let boardLeft = canvasBoard.getBoundingClientRect().left; // left is horizontal distance from top left corner
//to draw a line we first have to get starting and ending point
//get canvas help join points

// to get everything we use addEventListener
// mousedown and mouseup are used for tracking where we press and release mouse
// click is equal to mousedown+mouseup

let iX, iY, fX, fY;
let drawingMode = false;
body.addEventListener("mousedown", function (e) {
  console.log(e);
  iX = e.clientX + boardLeft;
  iY = e.clientY - boardTop;
  //console.log(iX, yPos);
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = true;
    tool.beginPath();
    tool.moveTo(iX, iY);
  }
});

body.addEventListener("mousemove", function (e) {
  if (drawingMode == false) return;

  fX = e.clientX + boardLeft;
  fY = e.clientY - boardTop;

  tool.lineTo(fX, fY);
  tool.stroke();
  iX = fX;
  iY = fY;
});

body.addEventListener("mouseup", function (e) {
  fX = e.clientX;
  fY = e.clientY - boardTop;
  //console.log(xPos, yPos);
  let width = fX - iX;
  let height = fY - iY;
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = false;
  } else if (cTool == "rect") {
    tool.strokeRect(iX, iY, width, height);
  } else if (cTool == "line") {
    //beginPath begins drawing
    //move to (x,y) move to the given location without draw
    //lineTo(x,y) current point last point draw
    //stroke prodcues effect on ui
    console.log(e);

    tool.beginPath();
    tool.moveTo(iX, iY);
    tool.lineTo(fX, fY);
    tool.stroke();
  }
});
// //tool change logic
// let rectTool = document.querySelector(".fa-square");
// let lineTool = document.querySelector(".fa-grip-lines-vertical");
// //let cTool = "pencil";

// rectTool.addEventListener("click", function () {
//   cTool = "rectTool";
// });

// lineTool.addEventListener("click", function () {
//   cTool = "lineTool";
// });
