import { useState } from "react";

function Xo() {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  function getWinner(square) {
    for (let i of winning) {
      const [a, b, c] = i;
      if (square[a] && square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  function handleSquareClick(i) {
    if (board[i] || getWinner(board)) return;
    const updateBoard = [...board];
    updateBoard[i] = isX ? "X" : "O";
    setBoard(updateBoard);
    setIsX(!isX);
  }

  function getGameState() {
    const winner = getWinner(board);
    if (winner) return `Winner: ${winner}`;

    if (board.every((square) => square !== null)) {
      return `It's a Draw!`;
    }

    return `The Next Player: ${isX ? "X" : "O"}`;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsX(true);
  }
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-center font-semibold text-5xl mb-8 text-white">
          Tic Tac Toe
        </h1>

        <div
          className={`text-center mb-6 ${
            getWinner(board)
              ? "text-2xl font-bold text-green-400 animate-bounce"
              : "text-xl text-white"
          }`}
        >
          {getGameState()}
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6">
          {board.map((square, i) => (
            <button
              className="h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-300 hover:bg-gray-700 text-white"
              key={i}
              onClick={() => handleSquareClick(i)}
            >
              {square}
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="text-white w-full border rounded-xl py-3 text-lg hover:bg-white hover:text-gray-800 transition-colors duration-300 cursor-pointer"
        >
          NEW GAME
        </button>
      </div>
    </div>
  );
}

export default Xo;
