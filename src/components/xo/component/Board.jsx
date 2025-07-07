import Square from "./Square";

export default function Board({ squares, winnerLines, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 rounded-xl  ">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          isWinning={winnerLines.includes(i)}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}
