var points = 0;
var questions = [
    {
      title: "In javascript, arrays are used to store...",
      choices: ["numbers", "all of these..", "booleans", "strings"],
      answer: "all of these.."
    },
    {
      title: "The name of a function is stored before the...",
      choices: ["parentheses", "angle brackets","brackets", "content"],
      answer: "parentheses"
    },
    {
      title: "To store information despite a page being refreshed or closed, you should use",
      choices: ["public storage", "private storage", "local storage", "the console"],
      answer: "local storage"
    },
    {
      title: "Which is NOT an on-screen pop up",
      choices: ["alert", "confirm", "prompt", "console.log"],
      answer: "console.log"
    },
    {
      title: "What is a good online coding resource",
      choices: ["Mack B's Medical Mondays", "Stackoverflow", "Vsauce", "Dog.com"],
      answer: "Stackovoerflow"
    },
    {
      title: "What is NOT one of the three basic languages of Web Design",
      choices: ["HTML", "CSS", "Javascript", "Swedish"],
      answer: "Swedish"
    },
    {
      title: "The L in HTML stands for...",
      choices: ["Language", "Leftover", "Listing", "Listings"],
      answer: "Language"
    },
    {
      title: "How many units of cool is it to be a developer",
      choices: ["1 unit", "2 units", "0 units", "10 units"],
      answer: "10 units"
    },
    {
      title: "The name of a variable is meant to be defined inside of...",
      choices: ["Parentheses", "Quotes", "Nothing at all", "Curly braces"],
      answer: "Nothing at all"
    },
    {
      title: "How do you think you did? I think you killed it buddy :>",
      choices: ["feelin' pretty good", "coulda done better", "ace'd it baby", "doesn't matter"],
      answer: "doesn't matter"
    },
  ];
  
function startQuiz(){
    console.log("pressed the start button..");

    var elem = document.getElementById("startBtn");
    elem.parentNode.removeChild(elem);
    startTimer();
    spawnQuestionOne();
    
}

var seconds = document.getElementById("timer").innerHTML;
var countdown
function startTimer(){
    console.log("timer's workin'");

    countdown = setInterval(function(){
    seconds--;
    document.getElementById("timer").innerHTML = seconds;
    if(seconds<=0){
      console.log("Out of time!!");
      document.getElementById("timer").textContent = 0;
      endGame();
      displayLoseCondition();
    }
    if (seconds<= 0) clearInterval(countdown) 
}, 1000);
}

function displayLoseCondition(){
document.getElementById("questionConfirm").innerHTML = "YOU RAN OUT OF TIME!"
}


function decreaseTimer(){
  console.log("timer -10 sec");
  console.log(seconds);
  seconds = seconds - 10;
}

function stopTimer(){
  console.log("stop the timer...");
  console.log(seconds);
  clearInterval(countdown);
}


function answeredWrong(){
  console.log("you are wrong!!!")
  decreaseTimer();
  document.getElementById("questionConfirm").innerHTML = "INCORRECT! - 10 sec"

}

function answeredRight(){
  console.log("you are right!!!")
  points ++;
  console.log(points);
  document.getElementById("questionConfirm").innerHTML = "CORRECT!"
}

function endGame(){
  console.log("GAME OVER BABY!!!");
  stopTimer();
  function removeElementOne() {
    var elementOne = document.getElementById("buttonOne");
    elementOne.parentNode.removeChild(elementOne);
  }
  

  function removeElementTwo() {
    var elementTwo = document.getElementById("buttonTwo");
    elementTwo.parentNode.removeChild(elementTwo);
  }
  
  
  function removeElementThree() {
    var elementThree = document.getElementById("buttonThree");
    elementThree.parentNode.removeChild(elementThree);
  }
  
  
  function removeElementFour() {
    var elementFour = document.getElementById("buttonFour");
    elementFour.parentNode.removeChild(elementFour);
  }


  function saveName(x){
    localStorage.setItem("name", x);
  }function saveScore(y){
    localStorage.setItem("score", y);
  }

  var savedName=localStorage.getItem("name");
  var savedScore=parseInt(localStorage.getItem("score"),10);

function createElements(){
  //make the restart button
 
  //make a form where u can enter ur name + store the value in local storage!
var newDisplay = document.createElement("h2");
newDisplay.className = "newDisplay"
newDisplay.setAttribute("id", "hallOfWinners");
newDisplay.innerHTML = "Enter your name here to submit your score to the Hall Of Winners";
document.body.appendChild(newDisplay);


  var newForm = document.createElement("input");
  newForm.className = "form";
  newForm.setAttribute("type", "text");
  newForm.setAttribute("id", "nameTyped");
  document.body.appendChild(newForm);
  
  
  
  var submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Submit your score!";
  submitBtn.className = "restartButton";
  submitBtn.onclick = function(){

      var myInput = document.getElementById("nameTyped").value;
      document.getElementById("hallOfWinners").innerHTML = "Name: " + myInput + " Score: " + points;

      saveName(myInput);
      saveScore(points);
      

    console.log(points);
    console.log(myInput);
  }
  document.body.appendChild(submitBtn);

 var winnersBtn = document.createElement("button");
  winnersBtn.innerHTML = "Hall of Winners";
  winnersBtn.className = "restartButton";
  winnersBtn.onclick = function(){
    document.getElementById("header").innerHTML="HALL OF WINNERS!!!"
    document.getElementById("questionTitle").innerHTML = "We appreciate the valiant effort of all contenders.";
    


    document.getElementById("hallOfWinners").innerHTML += "1. " + savedName + " Score: " + savedScore 
    createCleaerBtn();
    console.log(savedName);
    console.log(savedScore);
    console.log("take me to the winners hall!");
  }
  document.body.appendChild(winnersBtn);


  var newBtn = document.createElement("button");
  newBtn.innerHTML = "Restart Game";
  newBtn.className = "restartButton";
  newBtn.onclick = function(){
    location.reload();
  }
  document.body.appendChild(newBtn);


  function createCleaerBtn(){
    var clearBtn = document.createElement("button");
    clearBtn.innerHTML = "clear highscores"
    clearBtn.className = "restartButton";
    clearBtn.onclick = function(){
      document.getElementById("hallOfWinners").innerHTML="";
      localStorage.clear();
      console.log("cleared out local storage...")
      clearBtn.parentNode.removeChild(clearBtn);
    }
    document.body.appendChild(clearBtn);
  }


  
  
  // function removeElementThree() {
  //   var elementThree = document.getElementById("buttonThree");
  //   elementThree.parentNode.removeChild(elementThree);
  // }
  

  //makea button to call the function displayScores
}

  removeElementOne();
  removeElementTwo();
  removeElementThree();
  removeElementFour();
  createElements();
  
  document.getElementById("questionConfirm").innerHTML = ""
  document.getElementById("questionTitle").innerHTML = "Good job lil buddy! you got " + points + " out of 10!"
}
















function spawnQuestionOne(){
    document.getElementById("questionTitle").innerHTML = questions[0].title;

    var all = document.getElementsByClassName("answerButton");
    for (var i = 0; i < all.length; i++) {
      all[i].style.opacity = '100';
    }

    var wrong = document.getElementById("buttonOne")
    document.getElementById("buttonOne").textContent = questions[0].choices[0];
    var correct = document.getElementById("buttonTwo")
    document.getElementById("buttonTwo").textContent = questions[0].choices[1];
    var wrongTwo = document.getElementById("buttonThree")
    document.getElementById("buttonThree").textContent = questions[0].choices[2];
    var wrongThree = document.getElementById("buttonFour")
    document.getElementById("buttonFour").textContent = questions[0].choices[3];

    wrong.onclick=function(){
      console.log("1");
      spawnQuestionTwo();
      answeredWrong();
    }
    correct.onclick=function(){
      console.log("2");
      spawnQuestionTwo();
      answeredRight();
    }
    wrongTwo.onclick=function(){
      console.log("3");
      spawnQuestionTwo();
      answeredWrong();
    }
    wrongThree.onclick=function(){
      console.log("4");
      spawnQuestionTwo();
      answeredWrong();
    }
}

function spawnQuestionTwo(){

  document.getElementById("questionTitle").innerHTML = questions[1].title;

  var correct = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[1].choices[0];
  var wrong = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[1].choices[1];
  var wrongTwo = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[1].choices[2];
  var wrongThree = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[1].choices[3];

  correct.onclick=function(){
    console.log("1");
    spawnQuestionThree();
    answeredRight();
  }
  wrong.onclick=function(){
    console.log("2");
    spawnQuestionThree();
    answeredWrong();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionThree();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionThree();
    answeredWrong();
  }
}

function spawnQuestionThree(){
  document.getElementById("questionTitle").innerHTML = questions[2].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[2].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[2].choices[1];
  var correct = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[2].choices[2];
  var wrongThree = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[2].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionFour();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionFour();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionFour();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionFour();
    answeredWrong();
  }
}

function spawnQuestionFour(){
  document.getElementById("questionTitle").innerHTML = questions[3].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[3].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[3].choices[1];
  var wrongThree = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[3].choices[2];
  var correct = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[3].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionFive();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionFive();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionFive();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionFive();
    answeredWrong();
  }
}

function spawnQuestionFive(){
  document.getElementById("questionTitle").innerHTML = questions[4].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[4].choices[0];
  var correct = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[4].choices[1];
  var wrongTwo = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[4].choices[2];
  var wrongThree = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[4].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionSix();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionSix();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionSix();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionSix();
    answeredWrong();
}
}

function spawnQuestionSix(){
  document.getElementById("questionTitle").innerHTML = questions[5].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[5].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[5].choices[1];
  var wrongThree = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[5].choices[2];
  var correct = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[5].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionSeven();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionSeven();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionSeven();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionSeven();
    answeredWrong();
}
}

function spawnQuestionSeven(){
  document.getElementById("questionTitle").innerHTML = questions[6].title;

  var correct= document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[6].choices[0];
  var wrong = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[6].choices[1];
  var wrongTwo = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[6].choices[2];
  var wrongThree = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[6].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionEight();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionEight();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionEight();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionEight();
    answeredWrong();
}
}

function spawnQuestionEight(){
  document.getElementById("questionTitle").innerHTML = questions[7].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[7].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[7].choices[1];
  var wrongThree = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[7].choices[2];
  var correct = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[7].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionNine();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionNine();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionNine();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionNine();
    answeredWrong();
}
}

function spawnQuestionNine(){
  document.getElementById("questionTitle").innerHTML = questions[8].title;

  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[8].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[8].choices[1];
  var correct = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[8].choices[2];
  var wrongThree = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[8].choices[3];

  wrong.onclick=function(){
    console.log("1");
    spawnQuestionTen();
    answeredWrong();
  }
  correct.onclick=function(){
    console.log("2");
    spawnQuestionTen();
    answeredRight();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    spawnQuestionTen();
    answeredWrong();
  }
  wrongThree.onclick=function(){
    console.log("4");
    spawnQuestionTen();
    answeredWrong();
}
}

function spawnQuestionTen(){
  document.getElementById("questionTitle").innerHTML = questions[9].title;
  
  var wrong = document.getElementById("buttonOne")
  document.getElementById("buttonOne").textContent = questions[9].choices[0];
  var wrongTwo = document.getElementById("buttonTwo")
  document.getElementById("buttonTwo").textContent = questions[9].choices[1];
  var wrongThree = document.getElementById("buttonThree")
  document.getElementById("buttonThree").textContent = questions[9].choices[2];
  var correct = document.getElementById("buttonFour")
  document.getElementById("buttonFour").textContent = questions[9].choices[3];

  wrong.onclick=function(){
    console.log("1");
    answeredWrong();
    endGame();
  }
  correct.onclick=function(){
    console.log("2");
    answeredRight();
    endGame();
  }
  wrongTwo.onclick=function(){
    console.log("3");
    answeredWrong();
    endGame();
  }
  wrongThree.onclick=function(){
    console.log("4");
    answeredWrong();
    endGame();
}
}



























