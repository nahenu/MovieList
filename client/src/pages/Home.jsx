import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
const Home = () => {
  const result = useSelector((state) => state.movieData);
  return (
    <div className="flex justify-center mt-[70px]">
      {result.length > 0 ? (
        <div className="w-full xl:w-[97vw] pl-[0.57rem] md:pl[3.58rem] ">
          {result.map((e, i) => {
            return <MovieCard e={e} key={i} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center mt-[70px] items-center w-full h-full">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-watching-movie-in-cinema-hall-6929514-5700484.png?f=webp"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Home;
