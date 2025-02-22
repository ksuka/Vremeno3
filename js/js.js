document.addEventListener('DOMContentLoaded', function(){



let roulette = document.querySelector(".roulette");
let btn = document.getElementById("btn");
let number = Math.ceil(Math.random() * 1000);


btn.onclick = function () {
    roulette.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);

};

});












