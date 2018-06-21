var triviaQuestions = ["Who won the first World Series of Poker: Main Event?",
  "What was the largest WSOP: Main Event 1st Place?",
  "What was Tom Dwans online screen name?",
  "Who goes by the nickname The Poker Brat?",
  "Who is credited with starting the Poker Boom?",
  "What year did Black Friday happen?",
  "Who is the best poker player ever?",
  "What Online Poker Website defrauded players out of more than $300 million?",
  'Who was not involved in "the Most Exclusive, High-Stakes Underground Poker Game in the World?"']

var triviaAnswers = {
  answers1: ["Johnny Leaf", "Johnny Moss", "Johnny Appleseed", "Johnny Bananas"],
  answers2: ["9 Ladies Dancing", "$8,000,00", "about tree fiddy", "$12,000,000"],
  answers3: ["mytommyhurts", "durrrr", "dwanoftheman", "dwanofthewoman"],
  answers4: ["Phil Ivey", "Phil Hellmuth", "Phil Bratswoski", "Philip J Fry"],
  answers5: ["George W Bush", "Chris Moneymaker", "Adam Dolladollabillsya", "Anthony Wiener"],
  answers6: ["2009", "ummm the Friday after Thanksgiving", "2010", "2011"],
  answers7: ["Derek Lee Reed", "Phil Ivey", "Matt Damon", "Kendell Jenner"],
  answers8: ["Full Tilt Poker", "Party Poker", "Pokerstars", "Trilogy Poker"],
  answers9: ["Ben Affleck", "Macaulay Culkin", "Michael Cera", "Leonardo DiCaprio"]
};

function Question1 () {
  $('#questions').html();

}


var number = 5;
var wrong = 0;
var right = 0;
var intervalid;
var timer;

function start() {
  $('#start').hide();

  run();
}

function restart() {
  wrong = 0;
  right = 0;
}

function run() {
  clearInterval(timer);
  timer = setInterval(decrement, 1000);
}

function loser() {
  $('#answers').html('<img src="assets/images/cards.gif">');
}

function winner() {
  $('#answers').html('<img src="assets/images/cards.gif">');
}

function decrement() {
  $('#timer').html("Time Remaining: " + number);
  number--;
    if (number === -1) {
      stop()
    }
}

function stop() {
  clearInterval(timer);
}






