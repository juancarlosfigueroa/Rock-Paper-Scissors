alert('Hello, get ready to play Rock Paper Scissors!');
var playAgain = true
var player1wins = 0;
var player2wins = 0;
var playerVsBot = 0;
var botWins = 0;

var roShamBo = function(player1,player2) {
	alert('Player One Chose: ' + playerOneInput + '!\n' + '&\n' + 'Player Two Chose: ' + playerTwoInput + '!');
	if (player1.toUpperCase() == 'ROCK') {
		if (player2.toUpperCase() == 'ROCK') {
			return alert('Rock can not beat Rock. It is a tie!');
		} else if (player2.toUpperCase() == 'PAPER') {
			player2wins++
			return alert('Paper beats Rock. Player Two Wins!');
		} else if (player2.toUpperCase() == 'SCISSORS') {
			player1wins++
			return alert('Rock beats Scissors. Player One Wins!');
		}
	}else if (player1.toUpperCase() == 'PAPER') {
		if (player2.toUpperCase() == 'PAPER') {
			return alert('Paper can not beat paper. It is a tie!');
		}else if (player2.toUpperCase() == 'SCISSORS') {
			player2wins++
			return alert('Scissors beats Paper. Player Two Wins!');
		}else if (player2.toUpperCase() == 'ROCK') {
			player1wins++
			return alert ('Paper beats Rock. Player One Wins!');
		}
	}else if (player1.toUpperCase() == 'SCISSORS') {
		if (player2.toUpperCase() == 'SCISSORS') {
			return alert('Scissors can not beat Scissors. It is a tie!');
		}else if (player2.toUpperCase() == 'ROCK') {
			player2wins++
			return alert('Rock beats Scissors. Player Two Wins!');
		}else if (player2.toUpperCase() == 'ROCK') {
			player1wins++
			return alert('Scissors beats Paper. Player One Wins!');
		}
	}
return alert('Invalid Entry!\n' + 'Please put in either Rock, Paper or Scissors!')
};



while(playAgain == true){
	var playerOneInput = prompt("Player One, what's your play: Rock, Paper or Scissors?!");
	var playerTwoInput = prompt("Player Two, what's your play: Rock, Paper or Scissors?!");
	roShamBo(playerOneInput,playerTwoInput);
	alert('Player One has won ' + player1wins + ' times!\n' + '&\n' + 'Player Two has won ' + player2wins + ' times!' )
	if (confirm('Do you want to play again?') == false) {
		playAgain = false;
	}

};


