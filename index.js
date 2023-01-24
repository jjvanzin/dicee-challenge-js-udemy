function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1;
randomNumber1 = Math.random()* 6;
randomNumber1 = Math.ceil(randomNumber1);

var randomNumber2;
randomNumber2 = Math.random()* 6;
randomNumber2 = Math.ceil(randomNumber2);

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if(randomNumber1==randomNumber2){

  document.querySelector('h1').innerHTML="🚩Match Draw🚩";

}

else if (randomNumber1>randomNumber2){

  document.querySelector('h1').innerHTML="🚩Player 1 Wins";

}else{

  document.querySelector('h1').innerHTML="Player 2 Wins🚩";

} 