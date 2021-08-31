import { Link } from "react-router-dom";
import FavIcon from "../../Home/SongsList/favIcon";
const SimilarArtist = (props) => {
  const { eachSimilarSong, updateState } = props;
  const changeSong = () => {
    updateState();
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <Link
        to={eachSimilarSong.name}
        className="text-deco"
        onClick={changeSong}
      >
        <img
          className="song-image w-100"
          src={eachSimilarSong.cover}
          alt={eachSimilarSong.name}
        />
        <div className="p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h5 className="mt-2">{eachSimilarSong.name}</h5>
            <FavIcon fav={eachSimilarSong.favorited} />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="m-0">{eachSimilarSong.artist}</p>
            {eachSimilarSong.new ? (
              <span className="badge badge-success">New</span>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default SimilarArtist;
