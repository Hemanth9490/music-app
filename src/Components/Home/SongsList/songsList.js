import SongItem from "./songItem";

const SongsList = (props) => {
  const { searchSuggestionList } = props;
  return (
    <div className="mt-2">
      <div className="songs-container d-flex flex-row flex-wrap">
        {searchSuggestionList.map((eachSong) => (
          <SongItem
            eachSong={eachSong}
            key={eachSong.cover + eachSong.source}
          />
        ))}
      </div>
    </div>
  );
};
export default SongsList;
