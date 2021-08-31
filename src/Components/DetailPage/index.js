import { Link } from "react-router-dom";

import { Component } from "react";
import FullSongDetails from "./FullSongDetails/fullSongdetails";
import songsListObject from "../SongsListObjects";
import SimilarArtist from "./SimilarArtist/similarArtist";

class DetailPage extends Component {
  state = { eachSongFull: [], similarArtistSongsList: [], ifTrue: false };
  componentDidMount() {
    this.getEachSongObject();
  }
  getEachSongObject = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const eachSongFull = songsListObject.filter(
      (eachSongObject) => eachSongObject.name === id
    );
    const similarArtistSongsList = songsListObject.filter(
      (eachSongObjects) => eachSongObjects.artist === eachSongFull[0].artist
    );

    this.setState({
      eachSongFull: eachSongFull,
      similarArtistSongsList: similarArtistSongsList,
      ifTrue: true,
    });
  };
  updateState = () => {
    this.getEachSongObject();
  };
  render() {
    const { eachSongFull, similarArtistSongsList, ifTrue } = this.state;

    return (
      <>
        {ifTrue ? (
          <div className="container d-flex flex-row mt-5 align-items-start">
            <Link to="/">
              <button className="btn mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </button>
            </Link>
            <div className="full-details container ">
              <FullSongDetails eachSongFull={eachSongFull[0]} />
              <h4 className="mt-5">Similar artist</h4>
              <div className="similar-artist-songs d-flex flex-row flex-wrap mt-3">
                {similarArtistSongsList.map((eachSimilarSong) => (
                  <SimilarArtist
                    eachSimilarSong={eachSimilarSong}
                    key={eachSimilarSong.cover}
                    updateState={this.updateState}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default DetailPage;
