import "./Board.css";
import Tile from "./Tile";

type BoardProps = {
  tileSymbol: string[];
};

export default function Board({ tileSymbol }: BoardProps) {

  return (
    <div className="board">
      <div className="row">
        <Tile symbol={tileSymbol[0]}></Tile>
        <Tile symbol={tileSymbol[1]}></Tile>
        <Tile symbol={tileSymbol[2]}></Tile>
      </div>
      <div className="row">
        <Tile symbol={tileSymbol[3]}></Tile>
        <Tile symbol={tileSymbol[4]}></Tile>
        <Tile symbol={tileSymbol[5]}></Tile>
      </div>
      <div className="row">
        <Tile symbol={tileSymbol[6]}></Tile>
        <Tile symbol={tileSymbol[7]}></Tile>
        <Tile symbol={tileSymbol[8]}></Tile>
      </div>
    </div>
  );
}
