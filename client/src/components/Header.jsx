import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { movieList } from "../redux/action/action";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favouriteMovieData);
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    return setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div
      className={`flex justify-center w-full gap-2 p-4 fixed top-0 ${
        isScrolled ? "backdrop-blur-lg" : "bg-gray-900"
      } bg-cover bg-center bg-blur backdrop-filter z-50`}
    >
      <Link to={"/"}>
        <Button onClick={() => dispatch(movieList())} color="success">
          Click Here!
        </Button>
      </Link>
      <div className="flex justify-center items-center gap-2">
        <Link to={"/favourite"}>
          <Button onClick={() => dispatch(movieList())}>Favourite!</Button>
        </Link>
        <h1 className="font-semibold text-lg text-white">{data.length}</h1>
      </div>
    </div>
  );
};

export default Header;
