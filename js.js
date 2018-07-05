var descriptionOfAllGames={
  1:'<br>You should follow color and audio path, each time level will get more difficult !',
  2:'<br>This is memory game. You have to pair same pictures!',
  3:'<br>Guess which movie, city, football club is hidden by taking letters. You have 10 lifes to finish the task.',
  4:'<br>Legendary game "SNAKE", each time when snake eat green square she gets bigger for that amount. ',
  5:'<br>You have to connect 4 of a kind ( in any dirrection) in order to win !! ',
  6:'<br>Try to have one cell with value of 2048 in order to win the game!!',
  7:'<br>You need to arrange the cells from 1 to 15 !!'
}

var config = {
    apiKey: "AIzaSyC5iCDmunS70lkeYnn7lhvr6_PVEPtA4Ws",
    authDomain: "diplomski-f3a86.firebaseapp.com",
    databaseURL: "https://diplomski-f3a86.firebaseio.com",
    projectId: "diplomski-f3a86",
    storageBucket: "diplomski-f3a86.appspot.com",
    messagingSenderId: "597008526357"
  };
  firebase.initializeApp(config);
var messageRef=firebase.database().ref('High Scores');
var allGames={
  'Simon Game':0,
  'Memory Game':0,
  'Snake':0,
  '2048':0
}
messageRef.on('value', dataOn);

function dataOn(data){
  var scores=data.val();
  var key=Object.keys(scores);
  var changeHighScore1=document.getElementById('listScore1');
  var changeHighScore2=document.getElementById('listScore2');

  var changeHighScore3=document.getElementById('listScore6');
  var changeHighScore4=document.getElementById('listScore4');

var highScore1=0;
var highScore2=0;
var highScore3=0;
var highScore4=0;
  for(var i=0;i<key.length;i++){
    var k=key[i];
   var initials1=scores[k]['Simon Game'];
   var initials2=scores[k]['Memory Game'];
   var initials4=scores[k]['Snake'];
   var initials3=scores[k]['2048'];

   if(initials1>highScore1)
   {
     highScore1=initials1;
     changeHighScore1.innerHTML=' High Score: '+highScore1;

   }
   if(initials2>highScore2)
   {
     highScore2=initials2;
     changeHighScore2.innerHTML=' High Score: '+highScore2;

   }
   if(initials3>highScore3)
   {
     highScore3=initials3;
     changeHighScore3.innerHTML=' High Score: '+highScore3;

   }
   if(initials4>highScore4)
   {
     highScore4=initials4;
     changeHighScore4.innerHTML=' High Score: '+highScore4;
   }
  }
}
var index1=0;
$(document).ready(function(){
var ul=document.getElementById('lists');
var list = ul.getElementsByClassName("list-group-item");
var listToArr = Array.prototype.slice.call( list);
var changeNameOfTheGame=document.getElementById('game');
var changeImg=document.getElementById("changeImg");
var changeScore=document.getElementById('highScore');
var descriptionTekst=document.getElementById('pravilaIgre');
listToArr.forEach(function(e,index){
  listToArr[index].addEventListener("mouseover", function() {
    var textOfGame=document.getElementById("colorGame"+(index+1)).innerHTML;
    var highScorList=document.getElementById("listScore"+(index+1)).innerHTML;
  changeNameOfTheGame.innerHTML=textOfGame;
  changeImg.innerHTML=('<img src="images/'+(index+1)+'.jpg" class="img-responsive img" style="display:inline-block;"/>');
  index1=index+1;

  descriptionTekst.innerHTML=descriptionOfAllGames[index1];
  });
});
});
