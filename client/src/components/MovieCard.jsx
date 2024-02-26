import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { favouriteMovies } from "../redux/action/action";
const MovieCard = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="float-left m-5 h-[50vh] overflow-y-scroll">
        <div className="flex  w-full md:w-[40vw] xl:w-[29vw] shadow-md roverflow-hidden mx-auto">
          <div className="overflow-hidden rounded-xl relative transform  transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
            <div className="absolute inset-0 z-10  bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
            <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
              <div className="poster__info align-self-end w-full">
                <div className="h-32"></div>
                <div className="space-y-6 detail_info">
                  <div className="flex flex-col space-y-2 inner">
                    <h3 className="text-2xl font-bold text-white">
                      {props.e.title}
                    </h3>
                    <div className="mb-0 text-lg text-gray-400 flex gap-3">
                      {props.e.genres.map((genre) => {
                        return <p>{genre}</p>;
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col overview">
                    <div className="flex flex-col"></div>
                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                    <p className="text-xs text-gray-100 mb-6">
                      {props.e.overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute inset-0 transform w-full -translate-y-4"
              src={props.e.backdrop_path}
              style={{ filter: "grayscale(0)" }}
            />
            <div className="flex flex-row relative pb-5 justify-center z-10">
              <Button
                color="failure"
                onClick={() => dispatch(favouriteMovies(props))}
              >
                ADD FAVOURITE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
