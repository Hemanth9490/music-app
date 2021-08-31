const PlaySong = (props) => {
  const { eachSongFull } = props;
  return (
    <audio controls className="audio-container mb-5">
      <source src={eachSongFull.source} type="audio/mpeg" />
    </audio>
  );
};
export default PlaySong;
