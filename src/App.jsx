import React, { Component } from "react";
import { Searchbar } from 'components/Searchbar/Searchbar';
import MainPlace from "components/MainPlace/MainPlace";
import { getPictures } from 'api/pixabay-api';

export class App extends Component {
  state = {
    photos: [],             // array for render
    total: null,            // total amount of pictures in search result
    page: 1,                // number of a current page
    query: '',              // a search word or frase
    isLoaded: false,        // spinner status
  }
  
  // processing search-btn click
  onSearch = async (data) => {
    if (data.query !== this.state.query) {
      await this.setState({ query: data.query, page: 1, photos: [], total: null, isLoaded: true });
      this.getPicList();
    }
  }

  // processing loadMore-btn click
  onLoadMoreClick = async () => {
    await this.setState(prevState => ({ page: (prevState.page + 1), isLoaded: true }));
    this.getPicList();
  }
  
  // getting data from API
  getPicList = async () => {
    const { query, page, total } = this.state;
    try {
      await getPictures(query, page, this.handleSearchResult)
    } catch (error) {
      await this.setState({total: -1})
      this.handleSearchResult();
    }
  }

  // processing an income result of the search
  handleSearchResult = async (data) => {

    if (data !== undefined) {
      const newData = this.state.photos.concat(data.data.hits);
      await this.setState({ photos: newData, total: data.data.totalHits, isLoaded: false });
    } else {
      await this.setState({ photos: [], isLoaded: false });
    };

  }

  render() {
    return (
      <div>
        <Searchbar onSearch={this.onSearch} />
        <MainPlace data={this.state} onLoadMoreClick={this.onLoadMoreClick} />
      </div>
    );
  };
}

