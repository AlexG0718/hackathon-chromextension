document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const boardElement = document.querySelector('#board');

  const head = new Head(boardElement);
  const apple = new Apple(boardElement);
  const gameBoard = new Board(boardElement, 10, head, apple);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      gameBoard.newDirection = 'left';
    }
    if (e.code === 'ArrowRight') {
      gameBoard.newDirection = 'right';
    }
    if (e.code === 'ArrowDown') {
      gameBoard.newDirection = 'down';
    }
    if (e.code === 'ArrowUp') {
      gameBoard.newDirection = 'up';
    }
  });
});

 //Scoreboard
 const activeScore = document.querySelector('.active-score')
 const iconApple = document.querySelector('.score-apple')
 const highScore = document.querySelector('.high-score')
 const iconTrophy = document.querySelector('.score-trophy')
 let score = 0;
 let hiScore = 0;


 function incrementScore() {
   ++score;
   if (!hiScore) hiScore = score;
   else if (score > hiScore) {
     hiScore = score;
     iconTrophy.classList.add('grow');
     
   setTimeout(function () {
     iconTrophy.classList.remove('grow');
   }, 300)

   }
   activeScore.innerHTML = score;
   highScore.innerHTML = hiScore;
   

   iconApple.classList.add('grow');
   setTimeout(function () {
     iconApple.classList.remove('grow');
   }, 300)
 }