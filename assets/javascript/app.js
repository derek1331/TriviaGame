// Variables
var time = 16;
var right = 0;
var wrong = 0;
var intervalid;
var correct = ["Johhny Moss", "$12,000,000", "durrr", "Full Tilt Poker", "Chris Moneymaker"]


function rightanswer() {
  right++;
}

function wronganswer() {
  wrong++;
}

//Wrong answer function
function loser() {
 
  stop();
  time = 16;
  $("#timer").hide();
  $("#answers").hide();
  $("#score").show();
  $("#score").html("Right: " + right + "    Wrong: " + wrong + "<br>" + "<br>" + '<img src="assets/images/loser.gif">' + "<br>" + "<br>");
  $("#correct").show()
}


//Right answer function
function winner() {
  
  stop();
  time = 16;
  $("#timer").hide();
  $("#answers").hide();
  $("#correct").hide();
  $("#score").show();
  $("#score").html("Right: " + right + "    Wrong: " + wrong + '<br>' + '<br>' + '<img src="assets/images/win.gif">');
}



// Start trivia button
function start() {
  $("#correct").hide()
  $("#score").hide()
  $("#start").hide();
  $("#answers").show()
  $("#timer").show();
  $("#questions").show();
  run();
  setTimeout(question1, 1000);
}

//Restart
function restart() {
  wrong = 0;
  right = 0;
  time = 16;
  stop();
  $("#correct").empty();
  $("#answers").hide();
  $("#timer").empty();
  $("#questions").empty();
  $("#score").show();
  $("#score").html("How did you do?" + '<br>' + '<br>' + "Right: " + right + "    Wrong: " + wrong);
  $("#start").show();

}



// Timer
function run() {
  clearInterval(intervalid);
  intervalid = setInterval(decrement, 1000);
}

function decrement() {

  time--;

  $("#timer").html(time + " Seconds Left");

  if (time === 0) {
    stop();

  }
}

function stop() {
  clearInterval(intervalid);
}


// Questions and Answers. Probably should have set them as varaibles but oh well
// Couldn't figure out how to get it to switch to losers fujction when time === 0. Found a workaround but it screwed up the clicks.

function question1() {

  $("#questions").html("1. Who won the first World Series of Poker: Main Event?");

  $("#answer1").html("Johnny Leaf").click(function () {
    $("#correct").html("Correct Answer: " + correct[0].toString());

    loser();
    setTimeout(question2, 4500);
  });

  $("#answer2").html("Johhny Moss").click(function () {
    rightanswer();
    winner();
    setTimeout(question2, 4500);
  });

  $("#answer3").html("Johnny Appleseed").click(function () {
    $("#correct").html("Correct Answer: " + correct[0].toString());

    loser();
    setTimeout(question2, 4500);
  });

  $("#answer4").html("Johnny Bananas").click(function () {
    $("#correct").html("Correct Answer: " + correct[0].toString());

    loser();
    setTimeout(question2, 4500);
  });
}

function question2() {

  run();

  $("#start").hide();

  $("#score").hide();

  $("#correct").hide();


  $("#timer").show();

  $("#answers").show();

  $("#questions").html("2. What was the largest WSOP: Main Event 1st Place prize?");

  $("#answer1").html("9 Ladies Dancing").click(function () {
    $("#correct").html("Correct Answer: " + correct[1].toString());
    loser();
    setTimeout(question3, 4500);
  });

  $("#answer2").html("$9,000,000").click(function () {
    $("#correct").html("Correct Answer: " + correct[1].toString());

    loser();
    setTimeout(question3, 4500);
  });

  $("#answer3").html("about tree fiddy").click(function () {
    $("#correct").html("Correct Answer: " + correct[1].toString());
    loser();
    setTimeout(question3, 4500);
  });

  $("#answer4").html("$12,000,000").click(function () {
    rightanswer();
    winner();
    setTimeout(question3, 4500);
  });

}

function question3() {

  run();

  $("#start").hide();

  $("#score").hide();

  $("#correct").hide();

  $("#timer").show();

  $("#answers").show();

  $("#questions").html("3. What was Tom Dwans online screen name?");

  $("#answer1").html("mytommyhurts").click(function () {
    $("#correct").html("Correct Answer: " + correct[2].toString());
    loser();
    setTimeout(question4, 4500);
  });

  $("#answer2").html("durrr").click(function () {
    rightanswer();
    winner();
    setTimeout(question4, 4500);
  });

  $("#answer3").html("dwanoftheman").click(function () {
    $("#correct").html("Correct Answer: " + correct[2].toString());
    loser();
    setTimeout(question4, 4500);
  });

  $("#answer4").html("dwanofthewoman").click(function () {
    $("#correct").html("Correct Answer: " + correct[2].toString());
    loser();
    setTimeout(question4, 4500);
  });
}


function question4() {

  run();

  $("#start").hide();

  $("#score").hide();

  $("#correct").hide();

  $("#timer").show();

  $("#answers").show();

  $("#questions").html("4. What Online Poker Website defrauded players out of more than $300 million?");

  $("#answer1").html("Full Tilt Poker").click(function () {
    winner();
    setTimeout(question5, 4500);
  });

  $("#answer2").html("Party Poker").click(function () {
    $("#correct").html("Correct Answer: " + correct[3].toString());
    loser();
    setTimeout(question5, 4500);
  });

  $("#answer3").html("Pokerstars").click(function () {
    $("#correct").html("Correct Answer: " + correct[3].toString());
    loser();
    setTimeout(question5, 4500);
  });

  $("#answer4").html("Trilogy Poker").click(function () {
    $("#correct").html("Correct Answer: " + correct[3].toString());
    loser();
    setTimeout(question5, 4500);
  });
}

function question5() {

  run();

  $("#start").hide();

  $("#score").hide();

  $("#correct").hide();

  $("#timer").show();

  $("#answers").show();

  $("#questions").html("5. Who is credited with starting the Poker Boom?");

  $("#answer1").html("George W Bush").click(function () {
    $("#correct").html("Correct Answer: " + correct[4].toString());
    loser();
    setTimeout(restart, 4500);
  });

  $("#answer2").html("Adam Dolladollabillsya").click(function () {
    $("#correct").html("Correct Answer: " + correct[4].toString());
    loser();
    setTimeout(restart, 4500);
  });

  $("#answer3").html("Anthony Wiener").click(function () {
    $("#correct").html("Correct Answer: " + correct[4].toString());
    loser();
    setTimeout(restart, 4500);
  });

  $("#answer4").html("Chris Moneymaker").click(function () {
    winner();
    setTimeout(restart, 4500);
  });
}

// Didn't Work

  // var time = 16;

  // if (time === 0) {

  //   loser();
  //   setTimeout(question2, 4500);
  // };



// Screwy time work around

  // setTimeout(function() {
    //   loser();


   //   setTimeout(function() {
   //     stop();
   //     question2();
   //   }, 4500);
    // },15000);

    // while( (i = correct.shift()) !== undefined ) {
//   console.log(i);}