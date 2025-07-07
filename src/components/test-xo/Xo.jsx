import React, { useState } from "react";

// --- Helper function to determine the winner ---
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  // --- Check for a draw ---
  if (squares.every((square) => square !== null)) {
    return { winner: "Draw", line: [] };
  }
  return null;
};

// --- Square Component ---
// Represents a single clickable square on the board
const Square = ({ value, onClick, isWinning }) => {
  // --- Base styles for a square ---
  const baseStyle =
    "w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-6xl md:text-7xl font-bold transition-all duration-300 rounded-lg";

  // --- Style for the 'X' and 'O' marks ---
  let markStyle = "";
  if (value === "X") {
    markStyle = "text-red-500 [text-shadow:0_0_5px_#ef4444,0_0_15px_#ef4444]";
  } else if (value === "O") {
    markStyle =
      "text-yellow-300 [text-shadow:0_0_5px_#facc15,0_0_15px_#facc15]";
  }

  // --- Style for winning squares ---
  const winningStyle = isWinning ? "bg-zinc-700" : "bg-zinc-900";

  return (
    <button
      className={`${baseStyle} ${markStyle} ${winningStyle}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

// --- Board Component ---
// Renders the 3x3 grid of squares
const Board = ({ squares, onClick, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-zinc-800 shadow-[0_0_10px_#facc15,0_0_20px_#facc15,inset_0_0_5px_#facc15]">
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          isWinning={winningLine.includes(i)}
        />
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function Xo() {
  // --- State Management ---
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // --- Game Logic ---
  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];

  const handleClick = (i) => {
    // If there's a winner or the square is already filled, do nothing
    if (winner || board[i]) {
      return;
    }
    // Create a copy of the board state
    const newBoard = board.slice();
    // Set 'X' or 'O'
    newBoard[i] = isXNext ? "X" : "O";
    // Update state
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    // Reset all state to initial values
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  // --- Status message ---
  let status;
  const statusStyle =
    "text-3xl md:text-4xl font-bold transition-all duration-300 h-12";
  if (winner) {
    if (winner === "Draw") {
      status = (
        <p
          className={`${statusStyle} text-white [text-shadow:0_0_5px_#ffffff]`}
        >
          It's a Draw!
        </p>
      );
    } else {
      const winnerStyle =
        winner === "X"
          ? "text-red-500 [text-shadow:0_0_5px_#ef4444,0_0_15px_#ef4444]"
          : "text-yellow-300 [text-shadow:0_0_5px_#facc15,0_0_15px_#facc15]";
      status = (
        <p className={`${statusStyle} ${winnerStyle}`}>Winner: {winner}</p>
      );
    }
  } else {
    const nextPlayerStyle = isXNext
      ? "text-red-500 [text-shadow:0_0_5px_#ef4444,0_0_15px_#ef4444]"
      : "text-yellow-300 [text-shadow:0_0_5px_#facc15,0_0_15px_#facc15]";
    status = (
      <p className={`${statusStyle} ${nextPlayerStyle}`}>
        Next player: {isXNext ? "X" : "O"}
      </p>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center font-mono p-4">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-300 [text-shadow:0_0_7px_#facc15,0_0_20px_#facc15]">
          Neon Tic-Tac-Toe
        </h1>
        <div className="mt-6">{status}</div>
      </header>

      <main>
        <Board
          squares={board}
          onClick={handleClick}
          winningLine={winningLine}
        />
      </main>

      <footer className="mt-8">
        <button
          onClick={handleRestart}
          className="px-8 py-3 rounded-lg border-2 border-yellow-300 text-yellow-300 text-xl font-bold
                     hover:bg-yellow-300 hover:text-black hover:shadow-[0_0_15px_#facc15] 
                     transition-all duration-300 ease-in-out"
        >
          Restart Game
        </button>
      </footer>
    </div>
  );
}
