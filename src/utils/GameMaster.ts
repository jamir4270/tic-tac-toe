export default function GameVerdict(
  board: string[],
  currentNumOfMoves: number
) {
  const symbol = currentNumOfMoves % 2 ? "X" : "O";
  let hasWinner = false;
  const verdict = {
    gameDone: false,
    winner: "",
  };

  if (board[0] === symbol && board[1] === symbol && board[2] === symbol) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[3] === symbol &&
    board[4] === symbol &&
    board[5] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[6] === symbol &&
    board[7] === symbol &&
    board[8] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[0] === symbol &&
    board[3] === symbol &&
    board[6] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[1] === symbol &&
    board[4] === symbol &&
    board[7] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[2] === symbol &&
    board[5] === symbol &&
    board[8] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[0] === symbol &&
    board[4] === symbol &&
    board[8] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else if (
    board[2] === symbol &&
    board[4] === symbol &&
    board[6] === symbol
  ) {
    verdict.gameDone = true;
    hasWinner = true;
  } else {
    verdict.gameDone = currentNumOfMoves === 9 ? true : false;
    hasWinner = false;
  }

  if (verdict.gameDone && hasWinner) {
    verdict.winner = currentNumOfMoves % 2 ? "Player 1" : "Player 2";
  }

  if (verdict.gameDone && !hasWinner) {
    verdict.winner = "";
  }
  return verdict;
}
