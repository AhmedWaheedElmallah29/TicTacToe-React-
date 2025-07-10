import { Link } from "react-router-dom";

export default function Footer({ handleReset }) {
  return (
    <div>
      <div className="flex items-center">
        <button
          onClick={handleReset}
          className="whitespace-nowrap text-yellow-300 mt-8 border-yellow-300 border-2 rounded-lg px-4 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl font-bold hover:text-black hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_15px_#facc15] ease-in-out cursor-pointer mx-4"
        >
          New Game
        </button>
        <Link
          className="whitespace-nowrap text-yellow-300 mt-8 border-yellow-300 border-2 rounded-lg px-4 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl font-bold hover:text-black hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_15px_#facc15] ease-in-out cursor-pointer mx-4"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
