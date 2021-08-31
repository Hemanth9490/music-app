import { Link } from "react-router-dom";
import FavIcon from "./favIcon";
import "./songsList.css";

const SongItem = (props) => {
  const { eachSong } = props;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 sample">
      <Link to={eachSong.name} className="text-deco">
        <img
          className="song-image w-100"
          src={eachSong.cover}
          alt={eachSong.name}
        />
        <div className="p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h5 className="mt-2">{eachSong.name}</h5>
            <FavIcon fav={eachSong.favorited} />
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="m-0">{eachSong.artist}</p>
            {eachSong.new ? (
              <span className="badge badge-success">New</span>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default SongItem;
