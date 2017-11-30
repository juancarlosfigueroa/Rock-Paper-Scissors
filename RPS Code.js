alert('Hello, get ready to play Rock Paper Scissors!');
var playAgain = true;
var player1wins = 0;
var player2wins = 0;
var playerVsBot = 0;
var botWins = 0;
var continuePlaying = true;

var roShamBo = function(player1,player2) {
	alert('Player One Chose: ' + player1 + '!\n' + '&\n' + 'Player Two Chose: ' + player2 + '!');
	if (player1.toUpperCase() == 'ROCK') {
		if (player2.toUpperCase() == 'ROCK') {
			return alert('Rock can not beat Rock. It is a tie!');
		} else if (player2.toUpperCase() == 'PAPER') {
			player2wins++;
			return alert('Paper beats Rock. Player Two Wins!');
		} else if (player2.toUpperCase() == 'SCISSORS') {
			player1wins++;
			return alert('Rock beats Scissors. Player One Wins!');
		}
	}else if (player1.toUpperCase() == 'PAPER') {
		if (player2.toUpperCase() == 'PAPER') {
			return alert('Paper can not beat paper. It is a tie!');
		}else if (player2.toUpperCase() == 'SCISSORS') {
			player2wins++;
			return alert('Scissors beats Paper. Player Two Wins!');
		}else if (player2.toUpperCase() == 'ROCK') {
			player1wins++;
			return alert ('Paper beats Rock. Player One Wins!');
		}
	}else if (player1.toUpperCase() == 'SCISSORS') {
		if (player2.toUpperCase() == 'SCISSORS') {
			return alert('Scissors can not beat Scissors. It is a tie!');
		}else if (player2.toUpperCase() == 'ROCK') {
			player2wins++;
			return alert('Rock beats Scissors. Player Two Wins!');
		}else if (player2.toUpperCase() == 'paper') {
			player1wins++;
			return alert('Scissors beats Paper. Player One Wins!');
		}
	}
return alert('Invalid Entry!\n' + 'Please put in either Rock, Paper or Scissors!')
};

var roShamBoBot = function(player3,player4) {
	alert('Player One Chose: ' + player3 + '!\n' + '&\n' + 'RoShamBoBot Chose: ' + player4 + '!');
	if (player3.toUpperCase() == 'ROCK') {
		if (player4.toUpperCase() == 'ROCK') {
			return alert('Rock can not beat Rock. It is a tie!');
		} else if (player4.toUpperCase() == 'PAPER') {
			botWins++;
			return alert('Paper beats Rock. RoShamBoBot Wins!');
		} else if (player4.toUpperCase() == 'SCISSORS') {
			playerVsBot++;
			return alert('Rock beats Scissors. Player One Wins!');
		}
	}else if (player3.toUpperCase() == 'PAPER') {
		if (player4.toUpperCase() == 'PAPER') {
			return alert('Paper can not beat paper. It is a tie!');
		}else if (player4.toUpperCase() == 'SCISSORS') {
			botWins++;
			return alert('Scissors beats Paper. RoShamBoBotWins!');
		}else if (player4.toUpperCase() == 'ROCK') {
			 playerVsBot++;
			return alert ('Paper beats Rock. Player One Wins!');
		}
	}else if (player3.toUpperCase() == 'SCISSORS') {
		if (player4.toUpperCase() == 'SCISSORS') {
			return alert('Scissors can not beat Scissors. It is a tie!');
		}else if (player4.toUpperCase() == 'ROCK') {
			botWins++;
			return alert('Rock beats Scissors. RoShamBoBot Wins!');
		}else if (player4.toUpperCase() == 'paper') {
			playerVsBot++;
			return alert('Scissors beats Paper. Player One Wins!');
		}
	}
return alert('Invalid Entry!\n' + 'Please put in either Rock, Paper or Scissors!')
};


var playerVsPlayer = function (){
	while(playAgain == true){
	var playerOneInput = prompt("Player One, what's your play: Rock, Paper or Scissors?!");
	var playerTwoInput = prompt("Player Two, what's your play: Rock, Paper or Scissors?!");
	roShamBo(playerOneInput,playerTwoInput);
	alert('Player One has won ' + player1wins + ' times!\n' + '&\n' + 'Player Two has won ' + player2wins + ' times!' )
	if (confirm('Do you want to play again?') == false) {
		playAgain = false;}
	}
};


var playerVsRoShamBoBot = function (){
	while(playAgain == true){
	var valueFinder = (Math.round(Math.random() * 60)) ;
	if (valueFinder <= 20) {
		var botInput = 'Rock';
	}else if (valueFinder >20 && valueFinder <=40) {
		var botInput = 'Paper';
	}else if (valueFinder > 40 && valueFinder <= 60) {
		var botInput = 'Scissors';
	}
	var playerVsBotInput = prompt("Player, what's your play: Rock, Paper or Scissors?!");
	roShamBoBot(playerVsBotInput,botInput);
	alert('Player One has won ' + playerVsBot + ' times!\n' + '&\n' + ' RoShamBoBot has won ' + botWins + ' times!' )
	if (confirm('Do you want to play again?') == false) {
		playAgain = false;}
	};
};

var gameFunction = function () {
	return function () {
		while(continuePlaying == true){
			var gameMode = prompt("Do you want to play with a friend or RoShamBoBot?");
		if (gameMode.toUpperCase() == 'FRIEND') {
			alert('You chose to play with a friend!');
			playerVsPlayer()();
		}else if (gameMode.toUpperCase() == 'ROSHAMBOBOT') {
			alert('You chose to play against RoShamBoBot!');
			playerVsRoShamBoBot()();
		}else { 
			alert('Invalid response type in either friend or RoShamBoBot!');

		};
		}
		
	};
	
};

gameFunction()();