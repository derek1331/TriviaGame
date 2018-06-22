
var time = 30;
var wrong = 0;
var right = 0;
var intervalid;







var triviaQuestions = [,
  
  
  "Who goes by the nickname The Poker Brat?",
  "Who is credited with starting the Poker Boom?",
  "What year did Black Friday happen?",
  "Who is the best poker player ever?",
  "What Online Poker Website defrauded players out of more than $300 million?",
  'Who was not involved in "the Most Exclusive, High-Stakes Underground Poker Game in the World?"']

var triviaAnswers = {

  answers3: ["mytommyhurts", "durrrr", "dwanoftheman", "dwanofthewoman"],
  answers4: ["Phil Ivey", "Phil Hellmuth", "Phil Bratswoski", "Philip J Fry"],
  answers5: ["George W Bush", "Chris Moneymaker", "Adam Dolladollabillsya", "Anthony Wiener"],
  answers6: ["2009", "ummm the Friday after Thanksgiving", "2010", "2011"],
  answers7: ["Derek Lee Reed", "Phil Ivey", "Matt Damon", "Kendell Jenner"],
  answers8: ["Full Tilt Poker", "Party Poker", "Pokerstars", "Trilogy Poker"],
  answers9: ["Ben Affleck", "Macaulay Culkin", "Michael Cera", "Leonardo DiCaprio"]
};

function remover() {
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  wrong++;

}

function remover2() {
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  right++;
}

function Question1() {

  run();
  $('#questions').html('Who won the first World Series of Poker: Main Event?');

  $('#answer1').html('Johnny Leaf').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });
  $('#answer2').html('Johhny Moss').click(function () {
    winner();
    setTimeout(Question2, 5000);
  });
  $('#answer3').html('Johnny Appleseed').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });
  $('#answer4').html('Johnny Bananas').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });
}

function Question2() {


  run()

  $('#questions').html('What was the largest WSOP: Main Event 1st Place?');

  $('#answer1').html('9 Ladies Dancing').click(function () {
    loser();
    setTimeout(Question3, 5000);
  });

  $('#answer2').html('$9,000,000').click(function () {
    loser();
    setTimeout(Question3, 5000);
  });

  $('#answer3').html('about tree fiddy').click(function () {
    loser();
    setTimeout(Question3, 5000);
  });

  $('#answer4').html('$12,000,000').click(function () {
    winner();
    setTimeout(Question3, 5000);
  });

}
function Question3() {


  run()

  $('#questions').html('What was Tom Dwans online screen name?');

  $('#answer1').html('mytommyhurts').click(function () {
    loser();
    setTimeout(Question4, 5000);
  });

  $('#answer2').html('durrr').click(function () {
    winner();
    setTimeout(Question4, 5000);
  });

  $('#answer3').html('dwanoftheman').click(function () {
    loser();
    setTimeout(Question4, 5000);
  });

  $('#answer4').html('dwanofthewoman').click(function () {
    loser();
    setTimeout(Question4, 5000);
  });
}
function Question4() {


  run()

  $('#questions').html('What was Tom Dwans online screen name?');

  $('#answer1').html('mytommyhurts').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });

  $('#answer2').html('durrr').click(function () {
    winner();
    setTimeout(Question2, 5000);
  });

  $('#answer3').html('dwanoftheman').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });

  $('#answer4').html('dwanofthewoman').click(function () {
    loser();
    setTimeout(Question2, 5000);
  });
}


function start() {
  $('#start').hide();
  $('#timer').show();

  Question1();


}

function restart() {
  wrong = 0;
  right = 0;
}

function run() {
  clearInterval(intervalid);
  intervalid = setInterval(decrement, 1000);
}

function loser() {
  stop();
  remover();

  $('#answer1').html('Correct: ' + right);
  $('#answer2').html('Incorrect: ' + wrong);
  $('#answer3').html('<img src="assets/images/win.gif">');

}


function winner() {
  stop();
  remover2();

  $('#answer1').html('Correct: ' + right);
  $('#answer2').html('Incorrect: ' + wrong);
  $('#answer3').html('<img src="assets/images/win.gif">');


}

function decrement() {
  $('#timer').html('Time Remaining: ' + time);
  time--;
  if (time === -1) {
    stop()
  }
}





function stop() {
  clearInterval(intervalid);
}

$(window).on('load', function () {
  $('#timer').hide();
})




