
var time = 30;
var wrong = 0;
var right = 0;
var intervalid;



function start() {
  $('#start').hide();
  $('#timer').show();

  Question1();


}

function restart() {
  wrong = 0;
  right = 0;
  stop()
  $("#timer").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#answer4").empty();
  $("#questions").empty();
  $('#start').show();

}


function run() {
  clearInterval(intervalid);
  intervalid = setInterval(decrement, 1000);
}

function loser() {
  $('#answer1').html('Correct: ' + right);
  $('#answer2').html('Incorrect: ' + wrong);
  $('#answer3').html('<img src="assets/images/loser.gif">');
  $('#answer4').html('');

 
}

function winner() {
  $('#answer1').html('Correct: ' + right);
  $('#answer2').html('Incorrect: ' + wrong);
  $('#answer3').html('<img src="assets/images/win.gif">');
  $('#answer4').html('');
}
  
function decrement() {


  time--;


  $("#timer").html("<h2>" + time + "</h2>");



  if (time === 0) {


    stop();

  }
}

function stop() {
  clearInterval(intervalid);
}

$(window).on('load', function () {
  $('#timer').hide();
  $('#reset').hide();
});


function Question1() {

  run();

  $('#questions').html('1. Who won the first World Series of Poker: Main Event?');

  $('#answer1').html('Johnny Leaf').click(function () {
    // stop()
    loser();
    setTimeout(Question2, 3000);
  });
  $('#answer2').html('Johhny Moss').click(function () {
    right++;
    winner();
    setTimeout(Question2, 3000);
  });
  $('#answer3').html('Johnny Appleseed').click(function () {

    loser();
    setTimeout(Question2, 3000);
  });
  $('#answer4').html('Johnny Bananas').click(function () {

    loser();
    setTimeout(Question2, 3000);
  });
}

function Question2() {


  time = 30;
  run()

  $('#questions').html('2. What was the largest WSOP: Main Event 1st Place?');

  $('#answer1').html('9 Ladies Dancing').click(function () {


    loser();
    setTimeout(Question3, 3000);
  });

  $('#answer2').html('$9,000,000').click(function () {


    loser();
    setTimeout(Question3, 3000);
  });

  $('#answer3').html('about tree fiddy').click(function () {


    loser();
    setTimeout(Question3, 3000);
  });

  $('#answer4').html('$12,000,000').click(function () {
    right++;
    winner();
    setTimeout(Question3, 3000);
  });

}

function Question3() {


  
  run()


  $('#questions').html('3. What was Tom Dwans online screen name?');

  $('#answer1').html('mytommyhurts').click(function () {
    loser();
    setTimeout(Question4, 3000);
  });

  $('#answer2').html('durrr').click(function () {
    right++;
    winner();
    setTimeout(Question4, 3000);
  });

  $('#answer3').html('dwanoftheman').click(function () {
    loser();
    setTimeout(Question4, 3000);
  });

  $('#answer4').html('dwanofthewoman').click(function () {
    loser();
    setTimeout(Question4, 3000);
  });
}

function Question4() {


  
  run()


  $('#questions').html('4. What Online Poker Website defrauded players out of more than $300 million?');

  $('#answer1').html('Full Tilt Poker').click(function () {
    right++;
    winner();
    setTimeout(Question5, 3000);
  });

  $('#answer2').html('Party Poker').click(function () {
    loser();
    setTimeout(Question5, 3000);
  });

  $('#answer3').html('Pokerstars').click(function () {
    loser();
    setTimeout(Question5, 3000);
  });

  $('#answer4').html('Trilogy Poker').click(function () {
    loser();
    setTimeout(Question5, 3000);
  });
}

function Question5() {


  
  run()


  $('#questions').html('5. Who is credited with starting the Poker Boom?');

  $('#answer1').html('George W Bush').click(function () {
    loser();
    setTimeout(restart, 3000);
  });

  $('#answer2').html('Adam Dolladollabillsya').click(function () {
    loser();
    setTimeout(restart, 3000);
  });

  $('#answer3').html('Anthony Wiener').click(function () {
    loser();
    setTimeout(restart, 3000);
  });

  $('#answer4').html('Chris Moneymaker').click(function () {
    right++;
    winner();
    setTimeout(restart, 3000);
  });
}






