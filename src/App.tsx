import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div className="header">
        <h1>Tic Tac Toe</h1>
        <p>Play Now!</p>
      </div>
      <div className="main">
        <div className="game">
          <div className="board">
            <Board></Board>
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
