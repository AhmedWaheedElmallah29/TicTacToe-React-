export default function Square({ value, isWinning, onClick }) {
  const baseStyle =
    "w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-6xl md:text-7xl hover:bg-zinc-700 font-bold transition-all duration-300 rounded-lg";
  let markStyle = "";
  if (value === "X") {
    markStyle = "text-red-500 [text-shadow:0_0_5px_#ef4444,0_0_15px_#ef4444]";
  } else if (value === "O") {
    markStyle =
      "text-yellow-300 [text-shadow:0_0_5px_#facc15,0_0_15px_#facc15]";
  }
  const winningStyle = isWinning ? "bg-zinc-700" : "bg-zinc-900";
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${markStyle} ${winningStyle}`}
    >
      {value}
    </button>
  );
}
