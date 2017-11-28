alert('Hello, get ready to play Rock Paper Scissors!');

var playerOneInput = prompt("Player One, what's your play: Rock, Paper or Scissors?!");

var playerTwoInput = prompt("Player Two, what's your play: Rock, Paper or Scissors?!");

var roShamBo = function(player1,player2) {
	if (player1 == 'Rock') {
		if (player2 == 'Rock') {
			return alert('It is a tie!');
		} else if (player2 == 'Paper') {
			return alert('Player Two Wins!');
		} else if (player2 == 'Scissors') {
			return alert('Player One Wins!');
		}
	}else if (player1 == 'Paper') {
		if (player2 == 'Paper') {
			return alert('It is a tie!');
		}else if (player2 == 'Scissors') {
			return alert('Player Two Wins!');
		}else if (player2 == 'Rock') {
			return alert ('Player One Wins!');
		}
	}else if (player1 == 'Scissors') {
		if (player2 == 'Scissors') {
			return alert('It is a tie!');
		}else if (player2 == 'Rock') {
			return alert('Player Two Wins!');
		}else if (player2 == 'Paper') {
			return alert('Player One Wins!');
		}
	}
};

roShamBo(playerOneInput,playerTwoInput);