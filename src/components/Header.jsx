export default function Header({ winner, isXNext }) {
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
    <>
      <h1 className="text-[#ffdf20] text-5xl font-bold md:text-6xl [text-shadow:0_0_7px_#facc15,0_0_20px_#facc15]">
        Tic-Tac-Toe
      </h1>
      <div className="mt-6">{status}</div>
    </>
  );
}
