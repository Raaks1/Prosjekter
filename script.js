function load() {
  
  }
  window.onload = load;


function RNG() {
    document.getElementById("gen").innerHTML =
    Math.floor((Math.random() * 100 + 1));
}

function Rando() {
    document.getElementById("numero").innerHTML =
    Math.floor((Math.random() * 100 + 1));

}

let newNumb = setInterval(test, 3000);
let newNumbr = setInterval(test2, 3000);

function test2() {
    document.getElementById("numero").innerHTML =
    Math.floor((Math.random() * 100 + 1));
}

function test() {
    document.getElementById("gen").innerHTML =
    Math.floor((Math.random() * 100 + 1));
}


  




