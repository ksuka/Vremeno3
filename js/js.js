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




/*
let circle1 = document.querySelectorAll('.circle1')

circle1.onclick = function () {
  if (circle1.style.display === 'none') {
  circle1.style.display = 'block';
} else {
  circle1.style.display = 'none';
}

 
  };

  let circle1 = document.querySelectorAll(".circle1");
  
  
  circle1.onclick = function () {
    circle1.style.display = block;

  };*/


  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#555555";
  ctx.fillRect(0, 0, 800, 600);


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
  const eraserSize = 20; 
  ctx.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.arc(x, y, eraserSize / 2, 0, 2 * Math.PI);
  ctx.fill();
}







});












