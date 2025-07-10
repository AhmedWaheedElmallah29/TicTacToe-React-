import Header from "../components/Header";
import Footer from "../components/Footer";
import Board from "../components/Board";
import "../index.css";
import { useState } from "react";

export default function Xo3() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const size = 3;
    const winLength = 3;
    const lines = [];

    // Horizontal lines
    for (let row = 0; row < size; row++) {
      for (let col = 0; col <= size - winLength; col++) {
        const line = [];
        for (let k = 0; k < winLength; k++) {
          line.push(row * size + col + k);
        }
        lines.push(line);
      }
    }

    // Vertical lines
    for (let col = 0; col < size; col++) {
      for (let row = 0; row <= size - winLength; row++) {
        const line = [];
        for (let k = 0; k < winLength; k++) {
          line.push((row + k) * size + col);
        }
        lines.push(line);
      }
    }

    // Diagonal: top-left to bottom-right
    for (let row = 0; row <= size - winLength; row++) {
      for (let col = 0; col <= size - winLength; col++) {
        const line = [];
        for (let k = 0; k < winLength; k++) {
          line.push((row + k) * size + (col + k));
        }
        lines.push(line);
      }
    }

    // Diagonal: top-right to bottom-left
    for (let row = 0; row <= size - winLength; row++) {
      for (let col = winLength - 1; col < size; col++) {
        const line = [];
        for (let k = 0; k < winLength; k++) {
          line.push((row + k) * size + (col - k));
        }
        lines.push(line);
      }
    }

    // Check lines for winner
    for (const line of lines) {
      const [a, ...rest] = line;
      if (squares[a] && rest.every((i) => squares[i] === squares[a])) {
        return { winner: squares[a], line };
      }
    }

    // Check for draw
    if (squares.every((square) => square !== null)) {
      return { winner: "Draw", line: [] };
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
