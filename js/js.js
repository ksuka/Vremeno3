document.addEventListener('DOMContentLoaded', function(){

/*section1*/

let roulettee = document.querySelector(".roulette");
let number = 360*5 + Math.ceil(Math.random() * 1000);


roulettee.onclick = function () {
  roulettee.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};



/*section2*/

const dicebubi = document.getElementById("dicebubi");
  let rotation = 0;

  dicebubi.addEventListener("click", function() {
    rotation += 45; // Rotate by 90 degrees each click
   dicebubi.style.transform = `rotate(${rotation}deg)`;
  });



  const dicetrefi = document.getElementById("dicetrefi");
  let rotate = 0;

  dicetrefi.addEventListener("click", function() {
    rotate += -45; // Rotate by 90 degrees each click
    dicetrefi.style.transform = `rotate(${rotate}deg)`;
  });



  const dicechervi = document.getElementById("dicechervi");
  let rotat = 0;

  dicechervi.addEventListener("click", function() {
    rotat += -45; 
    dicechervi.style.transform = `rotate(${rotat}deg)`;
  });



 const dicepiki = document.getElementById("dicepiki");
  let rota = 0;

  dicepiki.addEventListener("click", function() {
    rota += 45; 
    dicepiki.style.transform = `rotate(${rota}deg)`;
  });


  const dicejoker = document.getElementById("dicejoker");
  let rot = 0;

  dicejoker.addEventListener("click", function() {
    rot += 45; 
    dicejoker.style.transform = `rotate(${rot}deg)`;
  });
  

  function handlemouseMove(event) {
    let ones = document.querySelectorAll(".one, .eight, .thirteen, .two, .fourteen, .six, .eleven, .nine"); 

    ones.forEach(function(one) { 
      let rect = one.getBoundingClientRect(); 
      let oneX = rect.left + one.clientWidth / 2; 
      let oneY = rect.top + one.clientHeight / 2; 

      let radian = Math.atan2(event.clientX - oneX, event.clientY - oneY);
      let rotation = (radian * (180 / Math.PI) * -1) + 90;
      one.style.transform = "rotate(" + rotation + "deg)"; 
    });
  }

  let section2 = document.querySelector(".section2");
  section2.addEventListener("mousemove", handlemouseMove);



  const luck1 = document.querySelectorAll('#luck1, #luck2, #luck3, #luck4, #luck5, #luck6');
  

  luck1.forEach(function(luck1){
    let currentScale = 1;
  const initialRotation = "rotate(35.99deg)";
    luck1.addEventListener('mouseenter', function() {
      currentScale += 0.1;
      luck1.style.transform = `scale(${currentScale}) ${initialRotation}`;
  });

  luck1.addEventListener('mouseleave', function() {
      currentScale = 1;
      luck1.style.transform = initialRotation;
  });
  })
  


  /*section4*/

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#555555";
  ctx.fillRect(0, 0, 810, 620);


let IsErasing = false;

canvas.addEventListener("mousedown", function(event){
  IsErasing = true;
  erase(event);
});

canvas.addEventListener("mouseup", function(){
  IsErasing = false;
})

canvas.addEventListener("mouseleave", function(){
  IsErasing = false;
})

canvas.addEventListener("mousemove", function(event){
  if (IsErasing){
    erase(event);
  }
});

function erase(event){
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const eraserSize = 30; 
  ctx.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
  ctx.globalCompositeOperation = 'destination-out';
  drawArc(ctx, x, y, 5, eraserSize/2, eraserSize/4);
  ctx.fill();
}
function drawArc(ctx, x, y, spikes, outerRadius, innerRadius) {
  let rot = Math.PI / 2 * 3;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(x, y - outerRadius)
  for (i = 0; i < spikes; i++) {
    x = x + Math.cos(rot) * outerRadius;
    y = y + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = x + Math.cos(rot) * innerRadius;
    y = y + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(x, y - outerRadius)
  ctx.closePath();


};



/*section6*/

const eightynine = document.querySelector(".eightynine");
const circle1 = document.querySelector(".circle1");

eightynine.addEventListener('click', function() {
  circle1.classList.toggle('visible');
});


const seven = document.querySelector('.seven');
const circle2 = document.querySelector('.circle2');

seven.addEventListener('click', function(){
circle2.classList.toggle('visible')
})


const forty_five = document.querySelector('.forty_five');
const circle3 = document.querySelector('.circle3');

forty_five.addEventListener('click', function(){
circle3.classList.toggle('visible')
})

const ninee = document.querySelector('.ninee');
const circle4 = document.querySelector('.circle4');

ninee.addEventListener('click', function(){
circle4.classList.toggle('visible')
})

const sixxx = document.querySelector('.sixxx');
const circle5 = document.querySelector('.circle5');

sixxx.addEventListener('click', function(){
circle5.classList.toggle('visible')
})


/*section7*/



let draggedElement = null;
let offsetX = 0, offsetY = 0;

document.querySelectorAll(".cardsc1 img, .cardsc2 img").forEach(img => {
  img.addEventListener("mousedown", function(event) {
    draggedElement = this;
    offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
    offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
    draggedElement.style.cursor = "grabbing";

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
});

function onMouseMove(event) {
  if (draggedElement) {
    let x = event.pageX - offsetX;
    let y = event.pageY - offsetY;
    draggedElement.style.left = x + "px";
    draggedElement.style.top = y + "px";
  }
}

function onMouseUp() {
  if (draggedElement) {
    draggedElement.style.cursor = "grab";
    draggedElement = null; 
  }
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}






const hand1 = document.querySelector('.hand1')

hand1.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(hand1.classList.contains("animate-hand1")){
      hand1.classList.remove("animate-hand1");  
     }
     else{
      hand1.classList.add("animate-hand1") 
     }
  } 
  else {
    hand1.classList.remove("animate-hand1") 
  }
})

const cards71 = document.querySelector('.cards71')
const hand11 = document.querySelector('.hand1')

hand11.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(cards71.classList.contains("animate-cards71")){
      cards71.classList.remove("animate-cards71");  
     }
     else{
      cards71.classList.add("animate-cards71") 
     }
  } 
  else {
    cards71.classList.remove("animate-cards71") 
  }
})

const hand2 = document.querySelector('.hand2')

hand2.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(hand2.classList.contains("animate-hand2")){
      hand2.classList.remove("animate-hand2");  
     }
     else{
      hand2.classList.add("animate-hand2") 
     }
  } 
  else {
    hand2.classList.remove("animate-hand2") 
  }
})


const hand22 = document.querySelector('.hand2')
const cards72 = document.querySelector('.cards72')

hand22.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(cards72.classList.contains("animate-cards72")){
      cards72.classList.remove("animate-cards72");  
     }
     else{
      cards72.classList.add("animate-cards72") 
     }
  } 
  else {
    cards72.classList.remove("animate-cards72") 
  }
})




const hand3 = document.querySelector('.hand3')

hand3.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(hand3.classList.contains("animate-hand3")){
      hand3.classList.remove("animate-hand3");  
     }
     else{
      hand3.classList.add("animate-hand3") 
     }
  } 
  else {
    hand3.classList.remove("animate-hand3") 
  }
})

const hand33 = document.querySelector('.hand3')
const cards73 = document.querySelector('.cards73')

hand33.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
    if(cards73.classList.contains("animate-cards73")){
     cards73.classList.remove("animate-cards73");  
    }
    else{
     cards73.classList.add("animate-cards73") 
    }
 } 
 else {
   cards73.classList.remove("animate-cards73") 
 }
})


const hand4 = document.querySelector('.hand4')

hand4.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
     if(hand4.classList.contains("animate-hand4")){
      hand4.classList.remove("animate-hand4");  
     }
     else{
      hand4.classList.add("animate-hand4") 
     }
  } 
  else {
    hand4.classList.remove("animate-hand4") 
  }
})

const hand44 = document.querySelector('.hand4')
const cards74 = document.querySelector('.cards74')

hand44.addEventListener('click', function(){
  if (window.matchMedia("(max-width: 768px)").matches) {
    if(cards74.classList.contains("animate-cards74")){
     cards74.classList.remove("animate-cards74");  
    }
    else{
     cards74.classList.add("animate-cards74") 
    }
 } 
 else {
   cards74.classList.remove("animate-cards74") 
 }
})


});












