document.addEventListener('DOMContentLoaded', function(){


/*
let roulette = document.querySelector(".roulette");
let number = Math.ceil(Math.random() * 1000);


roulette.onclick = function () {
  roulette.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};*/


let roulettee = document.querySelector(".roulette");
let number = Math.ceil(Math.random() * 1000);


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
    let ones = document.querySelectorAll(".one"); 

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
function mousemove(event){
let eights = document.querySelectorAll('.eight');

eights.forEach(function(eight){
let rec = document.getBoundingClientRect();
let eightX = rec.left + eight.clientX / 2;
let eightY = rec.top + eight.clientY /2;

let radiann = Math.atan2(event.clientX - eightX, event.clientY - eightY);
let rotat = (radiann * (180/Math.PI) * -1) + 90;
eight.style.transform = "rotate(" + rotat + "deg)";

let section2 = document.querySelector(".section2");
section2.addEventListener("mousemove", handlemouseMove);
});
}*/




















});












