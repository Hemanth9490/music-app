import "./fullsongdetails.css";

const FullSongDetails = (props) => {
  const { eachSongFull } = props;

  return (
    <div className="row shadow p-3">
      <div className="col-12 col-md-3">
        <img
          className="songs-image w-100"
          src={eachSongFull.cover}
          alt={eachSongFull.name}
        />
      </div>

      <div className="col-12 col-md-9 mt-3 mt-md-0">
        <h1>{eachSongFull.name}</h1>
        <h3 className="text-muted">{eachSongFull.artist}</h3>
        <p>{eachSongFull.description}</p>
        <audio controls className="audio-container mb-5">
          <source src={eachSongFull.source} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default FullSongDetails;
