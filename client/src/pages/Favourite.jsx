import { useSelector } from "react-redux";
import FavouriteMovieCard from "../components/FavouriteMovieCard";
const Favourite = () => {
  const data = useSelector((state) => state.favouriteMovieData);
  return (
    <div className="flex justify-center mt-[70px]  ">
      <div className="w-[95vw] px-7  ">
        {data.map((e, i) => {
          return <FavouriteMovieCard e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Favourite;
