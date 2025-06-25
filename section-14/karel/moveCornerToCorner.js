/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  //your code here
  moveDiagonal();
  moveDiagonal();
  moveDiagonal();
  moveDiagonal();
}

function moveDiagonal() {
  placeBeeper();

  move();
  turnLeft();
  move();
  turnRight();

  placeBeeper();
}

function placeBeeper() {
  if (noBeepersPresent()) {
    putBeeper();
  }
}
