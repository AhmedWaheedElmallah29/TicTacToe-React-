import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-white flex justify-center flex-col items-center bg-black min-h-screen">
      <h1 className="text-[#ffdf20] text-5xl font-bold mb-6 md:text-6xl [text-shadow:0_0_7px_#facc15,0_0_20px_#facc15]">
        Tic-Tac-Toe
      </h1>

      <div
        className="
        w-72
        h-72
        md:w-84
        md:h-84
        flex
        p-4
        flex-col
        items-center
        justify-around
        text-6xl
        md:text-7xl
        font-bold
        transition-all
        duration-300
        rounded-lg"
      >
        <Link
          className="text-yellow-300 mt-8 border-yellow-300 border-3 rounded-lg py-4 text-center
          text-2xl font-bold 
          bg-black
          min-w-full
          hover:text-black
          hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_15px_#facc15] ease-in-out cursor-pointer"
          to="3"
        >
          3x3
        </Link>
        <Link
          className="text-yellow-300 mt-8 border-yellow-300 border-3 rounded-lg py-4 text-center
          text-2xl font-bold 
          bg-black
          min-w-full
          hover:text-black
          hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_15px_#facc15] ease-in-out cursor-pointer"
          to="5"
        >
          5x5
        </Link>
      </div>
    </div>
  );
}

export default Home;
