import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { removeFavouriteMovies } from "../redux/action/action";

const FavouriteMovieCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm m-5 float-left h-[40vh] relative bg-white overflow-hidden ">
      <img src={props.e.backdrop_path} alt="" className="w-full h-full" />
      <h5 className="text-xl font-semibold pl-2 tracking-tight absolute bottom-0 w-full text-white bg-black border-white border-2 dark:text-white">
        {props.e.title}
      </h5>
      <Button
        className="absolute top-1 right-1"
        color="failure"
        onClick={() => dispatch(removeFavouriteMovies(props.e._id))}
      >
        X
      </Button>
    </div>
  );
};

export default FavouriteMovieCard;
