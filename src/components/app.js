import React, { Component } from 'react';

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="clearfix">
          <BookList />
          <BookDetail />
        </div>
        <hr></hr>
        <div>
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
