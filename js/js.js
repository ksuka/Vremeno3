document.addEventListener('DOMContentLoaded', function(){


/*
let roulette = document.querySelector(".roulette");
let number = Math.ceil(Math.random() * 1000);


roulette.onclick = function () {
  roulette.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};*/


let roulettee = document.querySelector(".roulette");
let number = 360*5 + Math.ceil(Math.random() * 1000);


roulettee.onclick = function () {
  roulettee.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};


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

    ones.forEach(function(one) { // Итерируемся по каждому элементу NodeList
      let rect = one.getBoundingClientRect(); // Получаем размеры и позицию каждого элемента
      let oneX = rect.left + one.clientWidth / 2;  // Центр элемента по X
      let oneY = rect.top + one.clientHeight / 2; // Центр элемента по Y

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
  



  const eightynine = document.querySelector(".eightynine");
    const circle1 = document.querySelector(".circle1");

    eightynine.addEventListener('click', function() {
      circle1.classList.toggle('visible');
    });



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



/*section7*/


let cardsc1 = document.querySelectorAll(".trefic1, .bubic1, .pikic1");

cardsc1.forEach(function(ecards) {
  let isDragging = false; // Corrected variable name
  let offsetX=0;
  let offsetY=0;

  ecards.addEventListener("mousedown", function(event) {
    isDragging = true; // Corrected variable name

    offsetX = event.clientX - ecards.getBoundingClientRect().left;
    offsetY = event.clientY - ecards.getBoundingClientRect().top;
    ecards.style.cursor = 'grabbing';  // Change cursor while dragging

    function onMouseMove(event) {
      if (isDragging) { // Corrected variable name
        let x = event.pageX - offsetX;
        let y = event.pageY - offsetY;

        // Corrected:  Use style.left and style.top directly. No need for offsetParent
        ecards.style.left = x + "px";
        ecards.style.top = y + "px";
      }
    }

    function onMouseUp(event) { 
      isDragging = false; // Corrected variable name
      ecards.style.cursor = 'grab'; // Restore the default cursor
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

  });
});











});












