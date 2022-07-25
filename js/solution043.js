//Rock Paper Scissors
//Let's play! You have to return which player won! In case of a draw return Draw!.

//Examples(Input1, Input2 --> Output):

//"scissors", "paper" --> "Player 1 won!"
//"scissors", "rock" --> "Player 2 won!"
//"paper", "paper" --> "Draw!"

//take in string 
//return string denoting which player won. 
//see examples above
//write fuction that uses conditional and  sets up a map/lookup table that says
// "for every option that player 1 can do, 
//what is the option that player 2 might do that would lead to player 1 winning?"
// and then in order to determine who wins, look at what player 2 actually did to see if it matches.

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };


