import { Component } from "react";
import TabItem from "./FilterButtons/filter";
import SearchBar from "./SearchBar/search";
import Carousell from "./Carousel/carousel";
import "./index.css";
import SongsList from "./SongsList/songsList";
import songsListObject from "../SongsListObjects";

const tabsList = [
  { tabId: "trending", displayText: "Trending" },
  { tabId: "new", displayText: "New Release" },
  { tabId: "favorited", displayText: "Favorited" },
];

class Home extends Component {
  state = {
    searchInputValue: "",
    songListArray: [],
  };

  componentDidMount() {
    this.getSongsList();
  }

  getSongsList = () => {
    this.setState({ songListArray: songsListObject });
  };

  onChangeTab = (category) => {
    this.setState({ tabActive: category });
    const filterSuggestion = songsListObject.filter(
      (eachSongObject) => eachSongObject[category] === true
    );
    this.setState({ songListArray: filterSuggestion });
  };

  onsearchBarChanage = (event) => {
    this.setState({ searchInputValue: event.target.value });
  };

  render() {
    const { tabActive, searchInputValue, songListArray } = this.state;
    const searchSuggestionList = songListArray.filter((eachSongObject) =>
      eachSongObject.name.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    return (
      <>
        <div className="container">
          <div className="search-bar-container">
            <SearchBar onsearchBarChanage={this.onsearchBarChanage} />
          </div>
          <div className="mt-5">
            <Carousell />
          </div>
          <div className="filter-buttons mt-5">
            <div className="tabs-container">
              <button
                type="button"
                className="tab-button"
                onClick={this.getSongsList}
              >
                ALL
              </button>
              {tabsList.map((eachTab) => (
                <TabItem
                  eachTab={eachTab}
                  key={eachTab.tabId}
                  onChangeTab={this.onChangeTab}
                  isActive={tabActive === eachTab.tabId}
                />
              ))}
            </div>
          </div>
          <div className="songs-display-container">
            <SongsList searchSuggestionList={searchSuggestionList} />
          </div>
        </div>
      </>
    );
  }
}
export default Home;
