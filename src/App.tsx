import { useState } from "react";
import "./App.css";
import Tile from "./components/Tile";

function App() {
  const [tile, setTile] = useState(["", "", "", "", "", "", "", "", ""]);
  const [moveCount, setMoveCount] = useState(0);

  function handleBoardChange(tilePos: number) {
    if (tile[tilePos] === "") {
      const newTile = [...tile];
      newTile[tilePos] = moveCount % 2 === 0 ? "X" : "O";
      setTile(newTile);
      setMoveCount(moveCount + 1);
    }
  }
  return (
    <>
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <p>Play Now!</p>
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
            <h3>Moves</h3>
            <p>placeholder move</p>
          </div>
          <div className="verdict">
            <p>Player 1 Wins!</p>
          </div>
        </div>
      </div>
      <button className="reset-button">Play Again</button>
    </>
  );
}

export default App;
