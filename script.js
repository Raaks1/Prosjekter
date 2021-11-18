function load() {
  
}
window.onload = load;


function RNG() {
  document.getElementById("neu").innerHTML =
  Math.floor((Math.random() * 100 + 1));
}



function Rando() {
  document.getElementById("numero").innerHTML =
  Math.floor((Math.random() * 100 + 1));
  clearInterval(newNumbr);
  setTimeout(setInterval(test2, 5000), 10000);
 
  
  
 

}

/*let newNumb = setInterval(test, 3000);*/
let newNumbr = setInterval(test2, 3000);

function test2() {
  document.getElementById("numero").innerHTML =
  Math.floor((Math.random() * 100 + 1));

  


  

}


/*function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 5000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  
}

f1();*/

/*function test() {
  document.getElementById("neu").innerHTML =
  Math.floor((Math.random() * 100 + 1));
}
*/


/*document.getElementById("numero").innerText =
  Math.floor((Math.random() * 100 + 1));
  let t = setTimeout(function(){ test2() }, 9000);*/





 /* function handleClick() {
    
    RandomNumberGenerator()
    setTimeout(setInterval(RandomNumberGenerator(), 5000), 10000);

  }*/