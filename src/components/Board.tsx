import { useState } from "react";
import "./Board.css";
import Tile from "./Tile";

/*type BoardProps = {
  tile: string[];
  boardChange: (newBoard: string[]) => 
};*/

export default function Board() {
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
    <div className="board">
      <div className="row">
        <Tile symbol={tile[0]} onTileClick={() => handleBoardChange(0)}></Tile>
        <Tile symbol={tile[1]} onTileClick={() => handleBoardChange(1)}></Tile>
        <Tile symbol={tile[2]} onTileClick={() => handleBoardChange(2)}></Tile>
      </div>
      <div className="row">
        <Tile symbol={tile[3]} onTileClick={() => handleBoardChange(3)}></Tile>
        <Tile symbol={tile[4]} onTileClick={() => handleBoardChange(4)}></Tile>
        <Tile symbol={tile[5]} onTileClick={() => handleBoardChange(5)}></Tile>
      </div>
      <div className="row">
        <Tile symbol={tile[6]} onTileClick={() => handleBoardChange(6)}></Tile>
        <Tile symbol={tile[7]} onTileClick={() => handleBoardChange(7)}></Tile>
        <Tile symbol={tile[8]} onTileClick={() => handleBoardChange(8)}></Tile>
      </div>
    </div>
  );
}
