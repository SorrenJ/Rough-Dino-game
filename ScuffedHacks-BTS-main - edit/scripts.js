const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
  const scoreDisplay = document.querySelector('#score');
      let score = 0;




function jump(){

if(dino.classList !="jump"){

 dino.classList.add("jump");

 //jump reset refresh
 setTimeout(function() {

 dino.classList.remove("jump");
},300);
 }


}




let isAlive = setInterval(function (){
// get current dino Y position


score += 1
scoreDisplay.innerHTML =  score

let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


// get currrent cactus x postion
let cactusLeft = parseInt(
  window.getComputedStyle(cactus).getPropertyValue("left")
);


//detect collision
if(cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140){
  //collision
  console.log("collision");
alert("Game Over")
scoreDisplay.innerHTML = 0;
score=0;
}

//detect collision
if(cactusLeft <45 && cactusLeft > 0 && dinoTop >= 40){
  //collision

let soundEffect = new Audio("sounds/scoring.mp3");
              soundEffect.play()

}




},10);





//makes dino jump once
document.addEventListener("keydown", function(event){
  jump();
      /*let soundEffect = new Audio("sounds/scoring.mp3");
                    soundEffect.play()
                           score += 10
                scoreDisplay.innerHTML = score*/
});
