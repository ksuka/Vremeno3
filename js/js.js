document.addEventListener('DOMContentLoaded', function(){



/*let roulette = document.querySelector(".roulette");
let btn = document.getElementById("btn");
let number = Math.ceil(Math.random() * 1000);


btn.onclick = function () {
    roulette.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);

};*/

/*const one = this.getElementById("one");
let rotation = 0;

one.addEventListener('click', function(){
  rotation += 45;
  one.style.transform = 'rotate(${rotation}deg)';

});
*/

/*const one = document.getElementById("one");

one.addEventListener("click", function moveElement() {
  one.style.left = '5vw';

})*/



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
  
  

});












