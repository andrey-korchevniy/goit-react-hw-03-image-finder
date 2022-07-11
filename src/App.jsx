import React, { Component } from "react";
import { Searchbar } from 'components/Searchbar/Searchbar';
import MainPlace from "components/MainPlace/MainPlace";
import { getPictures } from 'api/pixabay-api';

export class App extends Component {
  state = {
    objectForRender: [],    // array for render
    total: null,            // total amount of pictures in search result
    page: 1,                // number of a current page
    query: '',              // a search word or frase
    isLoaded: false,        // spinner status
  }
  
  // processing search-btn click
  onSearch = async (data) => {
    await this.setState({isLoaded: true})
    await this.setState({ query: data.query, page: 1, objectForRender: [], total: null });
    this.getPicList();
  }

  // processing loadMore-btn click
  onLoadMoreClick = async () => {
    await this.setState({isLoaded: true})
    await this.setState(prevState => ({ page: (prevState.page + 1) }));
    this.getPicList();
  }
  
  // getting data from API
  getPicList = () => {
    const { query, page } = this.state;
    getPictures(query, page, this.handleSearchResult)
  }

  // processing an income result of the search
  handleSearchResult = async (data) => {
    const newData = this.state.objectForRender.concat(data.data.hits)
    await this.setState({ objectForRender: newData, total: data.data.totalHits });
    this.setState({isLoaded: false})
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

