// this is for color change in tools (pens,pencils)

let pencil = document.querySelector("#pencil");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let eraser = document.querySelector("#eraser");
let options = document.querySelectorAll(".size-box");

//identify->click->again click
pencil.addEventListener("click", function () {
  if (cTool == "pencil") {
    //second click
    //show options
    options[0].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    cTool = "pencil";
    //allProps
    tool.strokeStyle = "lightpink";
    tool.lineWidth = pencilSize;
    // pencil.style.border = "1px solid red";
  }
});
eraser.addEventListener("click", function () {
  if (cTool == "eraser") {
    //second click
    //show options
    options[1].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }

    tool.strokeStyle = "white";
    cTool = "eraser";
    tool.lineWidth = eraserSize;
    // eraser.style.border = "1px solid red";
  }
});
rect.addEventListener("click", function () {
  if (cTool == "rect") {
    //second click
    //show options
    options[2].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    cTool = "rect";
    tool.strokeStyle = "lightpink";
    tool.lineWidth = rectSize;
    // rect.style.border = "1px solid red";
  }
});
line.addEventListener("click", function () {
  if (cTool == "line") {
    //second click
    //show options
    options[3].style.display = "flex";
  } else {
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
    cTool = "line";
    tool.strokeStyle = "lightpink";
    tool.lineWidth = lineSize;
    // line.style.border = "1px solid red";
  }
});
let redColor = document.querySelector(".red");
let blueColor = document.querySelector(".blue");
let greenColor = document.querySelector(".green");

redColor.addEventListener("click", function () {
  tool.strokeStyle = "lightpink"; //changes background according to color selected
});
blueColor.addEventListener("click", function () {
  tool.strokeStyle = "lightblue";
});
greenColor.addEventListener("click", function () {
  tool.strokeStyle = "lightgreen";
});

//size change logic
let pencilSize = 5;
let rectSize = 5;
let eraserSize = 5;
let lineSize = 5;

// event bubbling is happening here
// it means bubbling to the above classes till you find an event listener
let sizeBox = document.querySelectorAll(".size-box");
sizeBox[0].addEventListener("click", function (e) {
  let elems = ["size1", "size2", "size3", "size4"];
  // event intially occur on target
  // console.log(e.target);
  // this rrturns all classes
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);
  if (test) {
    if (firstClass == "size1") {
      pencilSize = 5;
    } else if (firstClass == "size2") {
      pencilSize = 10;
    } else if (firstClass == "size3") {
      pencilSize = 15;
    } else if (firstClass == "size4") {
      pencilSize = 20;
    }

    tool.lineWidth = pencilSize;
  }
  // event listener works on current target
  // console.log(e.currentTarget);
});
sizeBox[1].addEventListener("click", function (e) {
  let elems = ["size1", "size2", "size3", "size4"];
  // event intially occur on target
  // console.log(e.target);
  // this rrturns all classes
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);
  if (test) {
    if (firstClass == "size1") {
      eraserSize = 5;
    } else if (firstClass == "size2") {
      eraserSize = 10;
    } else if (firstClass == "size3") {
      eraserSize = 15;
    } else if (firstClass == "size4") {
      eraserSize = 20;
    }
    tool.lineWidth = eraserSize;
  }
  // event listener works on current target
  // console.log(e.currentTarget);
});
sizeBox[2].addEventListener("click", function (e) {
  let elems = ["size1", "size2", "size3", "size4"];
  // event intially occur on target
  // console.log(e.target);
  // this rrturns all classes
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);
  if (test) {
    if (firstClass == "size1") {
      rectSize = 5;
    } else if (firstClass == "size2") {
      rectSize = 10;
    } else if (firstClass == "size3") {
      rectSize = 15;
    } else if (firstClass == "size4") {
      rectSize = 20;
    }
    tool.lineWidth = rectSize;
  }
  // event listener works on current target
  // console.log(e.currentTarget);
});
sizeBox[3].addEventListener("click", function (e) {
  let elems = ["size1", "size2", "size3", "size4"];
  // event intially occur on target
  // console.log(e.target);
  // this rrturns all classes
  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);
  if (test) {
    if (firstClass == "size1") {
      lineSize = 5;
    } else if (firstClass == "size2") {
      lineSize = 10;
    } else if (firstClass == "size3") {
      lineSize = 15;
    } else if (firstClass == "size4") {
      lineSize = 20;
    }
    tool.lineWidth = lineSize;
  }
  // event listener works on current target
  // console.log(e.currentTarget);
});

// 2 way binding
// when user first gives input then there is a change
//  then he is inputing display the change
