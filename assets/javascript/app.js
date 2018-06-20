//start button that dissapers
//timer
//questions
//answers
//loser and winner images
//reset buttom/start over
// hover over answer effect


var firstQ =  {question1: "Who won the first World Series of Poker: Main Event?", wanswers1: ["Johnny Leaf", "Johnny Moss", "Johnny Appleseed", "Johnny Bananas"], ranswer: "Johnny Moss"}; 
var secondQ = {question2: "What was the largest WSOP: Main Event 1st Place?", wanswers2: ["9 Ladies Dancing", "$8,000,00", "about tree fiddy", "$12,000,000"]}; 
var thirdQ =  {question3: "What was Tom Dwans online screen name?", wanswers3: ["mytommyhurts", "durrrr", "dwanoftheman", "dwanofthewoman"] }; 
var fourtQ =  {question4: "Who goes by the nickname The Poker Brat?", wanswers4: ["Phil Ivey", "Phil Hellmuth", "Phil Bratswoski", "Philip J Fry"] }; 
var fifthQ =  {question5: "Who is credited with starting the Poker Boom?", wanswers5: ["George W Bush", "Chris Moneymaker", "Adam Dolladollabillsya", "Anthony Wiener"] }; 
var sixthQ =  {question6: "What year did Black Friday happen?", wanswers6: ["2009", "ummm the Friday after Thanksgiving", "2010", "2011"] }; 
var seventhQ =  {question7: "Who is the best poker player ever?", wanswers7: ["Derek Lee Reed", "Phil Ivey", "Matt Damon", "Kendell Jenner"] }; 
var eighthQ =  {question8: "What Online Poker Website defrauded players out of more than $300 million?", wanswers8: ["Full Tilt Poker", "Party Poker", "Pokerstars", "Trilogy Poker"] }; 
var ninthQ =  {question9: 'Who was not involved in "the Most Exclusive, High-Stakes Underground Poker Game in the World?"', wanswers9: ["Ben Affleck", "Macaulay Culkin", "Michael Cera", "Leonardo DiCaprio"] }; 
 

var number = 29;
var intervalId;


// functions


function run() {
  $("#start").hide();
  
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function questions () {
  $("#questions").text(firstQ["question1"]);
  $("#answers").text(firstQ["wanswers1"]);
  

}

function decrement() {

  questions();
  //  Show the number in the #show-number tag.
  $("#timer").html("Time Remaining: "+ number);
  //  Decrease number by one.
  number--;
  //  Once number hits zero...
  if (number === -1) {
    //  ...run the stop function.
    stop()
    //  Alert the user that time is up.
  
  }
}

function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}




//Game


  

  