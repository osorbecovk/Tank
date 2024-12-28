let box = document.querySelector(".box");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let btnTop = document.querySelector(".btnTop");
let btnBottom = document.querySelector(".btnBottom");
let img = document.querySelector("img")
let btns = document.querySelector(".btns")

box.style.position = "absolute";
box.style.top = "0px"; 
box.style.left = "0px"; 

let gradus = 0

btnLeft.addEventListener("click", () => {
  let leftPx = parseInt(box.style.left);
  box.style.left = leftPx - 10 + "px";
  gradus = -180
  box.style.transform = `rotate(${gradus}deg)`
});

btnRight.addEventListener("click", () => {
  let leftPr = parseInt(box.style.left);
  box.style.left = leftPr + 10 + "px";
   gradus = 0;
  box.style.transform = `rotate(${gradus}deg)`
});

btnTop.addEventListener("click", () => {
  let topPx = parseInt(box.style.top);
  box.style.top = topPx - 10 + "px";
  gradus = 270;
  box.style.transform = `rotate(${gradus}deg)`
});

btnBottom.addEventListener("click", () => {
  let topPx = parseInt(box.style.top);
  box.style.top = topPx + 10 + "px";
  gradus = -270;
  box.style.transform = `rotate(${gradus}deg)`
});

document.addEventListener("keydown", (event) => { 
    if (event.key === "ArrowRight" || event.key === "D" || event.key === "d") {
       let leftPr = parseInt(box.style.left);
       box.style.left = leftPr + 10 + "px";
       gradus = 0;
  box.style.transform = `rotate(${gradus}deg)`
    } else if (event.key === "ArrowUp" || event.key === "W" || event.key === "w") {
       let topPx = parseInt(box.style.top);
       box.style.top = topPx - 10 + "px";
       gradus = 270;
       box.style.transform = `rotate(${gradus}deg)`
    } else if (event.key === "ArrowDown" || event.key === "S" || event.key === "s") {  
       let topP = parseInt(box.style.top);
       box.style.top = topP + 10 + "px";
       gradus = 90;
       box.style.transform = `rotate(${gradus}deg)`
    } else if (event.key === "ArrowLeft" || event.key === "A" || event.key === "a") {
       let leftP = parseInt(box.style.left);
       box.style.left = leftP - 10 + "px";
       gradus = 180;
       box.style.transform = `rotate(${gradus}deg)`
    }
 });
 






 