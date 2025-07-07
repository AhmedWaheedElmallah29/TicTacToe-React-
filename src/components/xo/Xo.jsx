import Header from "./component/Header";
import Footer from "./component/Footer";
import Board from "./component/Board";
import "./xo.css";
import { useState } from "react";

export default function Xo() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    if (squares.every((square) => square !== null)) {
      return { winner: "Draw", lines: [] };
    }
    return null;
  };

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winnerLines = winnerInfo ? winnerInfo.line : [];

  const handleClick = (i) => {
    if (winner || board[i]) {
      return;
    }
    const newBoard = board.slice();
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  function handleReset() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }
  return (
    <div className="bg-black min-h-screen text-white flex justify-center flex-col items-center font-mono p-4">
      <Header winner={winner} isXNext={isXNext} />
      <Board
        squares={board}
        isXNext={isXNext}
        winnerLines={winnerLines}
        onClick={handleClick}
      />
      <Footer handleReset={handleReset} />
    </div>
  );
}
