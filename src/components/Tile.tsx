import "./Tile.css";

type TileProps = {
  symbol: string;
};

function Tile({ symbol }: TileProps) {
  return <div className="card">{symbol}</div>;
}

export default Tile;
