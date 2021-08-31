import { Component } from "react";
import "./search.css";

class SearchBar extends Component {
  render() {
    const { onsearchBarChanage } = this.props;
    const onChangeSearchInput = (event) => {
      onsearchBarChanage(event);
    };
    return (
      <div className="search-bar-component">
        <div className="searchbar-container">
          <input
            className="searchbar"
            placeholder="Search "
            onChange={onChangeSearchInput}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="grey"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
      </div>
    );
  }
}
export default SearchBar;
