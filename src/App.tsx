import { useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
import GameVerdict from "./utils/GameMaster";

function App() {
  const [tile, setTile] = useState(["", "", "", "", "", "", "", "", ""]);
  const [moveCount, setMoveCount] = useState(0);
  const [verdict, setVerdict] = useState("");
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [history, setHistory] = useState(Array(9).fill(-1));

  function restartGame() {
    setIsGameFinished(false);
    setTile(() => {
      const board = Array(9).fill("");
      return board;
    });
    setVerdict("");
    setMoveCount(0);
    setHistory(Array(9).fill(-1));
  }

  function handleBoardChange(tilePos: number) {
    if (tile[tilePos] !== "" || isGameFinished) {
      return;
    }

    const newMoveCount = moveCount + 1;

    const currentPlayer = newMoveCount % 2 ? "X" : "O";

    const newBoard = [...tile];
    newBoard[tilePos] = currentPlayer;

    const newHistory = [...history];
    newHistory[moveCount] = tilePos;

    const verdictResult = GameVerdict(newBoard, newMoveCount);

    setTile(newBoard);
    setMoveCount(newMoveCount);
    setHistory(newHistory);

    console.log(verdictResult.gameDone);
    console.log(verdictResult.winner);
    console.log(moveCount);
    console.log(newBoard);
    console.log(newHistory);

    if (verdictResult.gameDone) {
      setIsGameFinished(true);
      if (verdictResult.winner === "") {
        setVerdict("The match is a  draw");
      } else {
        setVerdict(`${verdictResult.winner} is the winner!!`);
      }
    }
  }
  return (
    <>
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="verdict">
        <h3>{isGameFinished ? verdict : ``}</h3>
      </div>
      <div className="main">
        <div className="game">
          <div className="board">
            <div className="row">
              <Tile
                symbol={tile[0]}
                onTileClick={() => handleBoardChange(0)}
              ></Tile>
              <Tile
                symbol={tile[1]}
                onTileClick={() => handleBoardChange(1)}
              ></Tile>
              <Tile
                symbol={tile[2]}
                onTileClick={() => handleBoardChange(2)}
              ></Tile>
            </div>
            <div className="row">
              <Tile
                symbol={tile[3]}
                onTileClick={() => handleBoardChange(3)}
              ></Tile>
              <Tile
                symbol={tile[4]}
                onTileClick={() => handleBoardChange(4)}
              ></Tile>
              <Tile
                symbol={tile[5]}
                onTileClick={() => handleBoardChange(5)}
              ></Tile>
            </div>
            <div className="row">
              <Tile
                symbol={tile[6]}
                onTileClick={() => handleBoardChange(6)}
              ></Tile>
              <Tile
                symbol={tile[7]}
                onTileClick={() => handleBoardChange(7)}
              ></Tile>
              <Tile
                symbol={tile[8]}
                onTileClick={() => handleBoardChange(8)}
              ></Tile>
            </div>
          </div>
        </div>
        <div className="game-info">
          <div className="move-history">
            <h2>Moves</h2>
            {history
              .filter((value) => value !== -1)
              .map((value, index) => (
                <p key={index}>{`Player ${
                  index % 2 === 0 ? "1" : "2"
                } at Cell ${value}`}</p>
              ))}
          </div>
        </div>
      </div>
      {isGameFinished && (
        <button className="reset-button" onClick={restartGame}>
          Play Again
        </button>
      )}
    </>
  );
}

export default App;
