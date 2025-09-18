import "./Tile.css";

type TileProps = {
  symbol: string;
  onTileClick: () => void;
};

function Tile({ symbol, onTileClick }: TileProps) {
  return (
    <div className="card" onClick={onTileClick}>
      {symbol}
    </div>
  );
}

export default Tile;
