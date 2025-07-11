import { Link } from "react-router-dom";

function HomeBtn() {
  return (
    <div>
      <Link
        className="text-yellow-300 mt-8 border-yellow-300 border-2 rounded-lg px-8 py-3 text-xl font-bold hover:text-black hover:bg-yellow-300 transition-all duration-200 hover:shadow-[0_0_15px_#facc15] ease-in-out cursor-pointer"
        to="/"
      >
        Home
      </Link>
    </div>
  );
}

export default HomeBtn;
