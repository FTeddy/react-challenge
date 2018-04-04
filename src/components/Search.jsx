import React from 'react'
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm'
import HeadlineQueryList from './HeadlineQueryList';
import axios from 'axios';

import { createStore } from 'redux'
import { getNewsSearchRdx } from '../redux/index.js'
import { reducer } from '../redux/index.js'
const store = createStore(reducer)

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      search: '',
      err: '',
      newsLook: []
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        newsLook: store.getState().newsSearch
      })
    })
  }

  searchNews = (query) => {
    let url = 'https://newsapi.org/v2/everything?' +
      `q=${query}&` +
      'language=en&' +
      'sortBy=publishedAt&' +
      'apiKey=7680942fa076452ab0671b9ef5516074';
    axios.get(url).then(response => {
      // console.log(response.data);
      // this.setState({
      //   newsLook: response.data.articles
      // })
      store.dispatch(getNewsSearchRdx(response.data.articles))
      this.props.history.push(`${this.props.match.path}/query/${query}`)
    }).catch(err => {
      this.setState({
        err: err.message
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Search for News</h1>
        <SearchForm searchNews={ this.searchNews }></SearchForm>
        <Route path={`${this.props.match.path}/query/:query`} render={() => {
            return <HeadlineQueryList newsLook={ this.state.newsLook } err={ this.state.err } />
          }}/>
      </div>
    )
  }
}

export default Search;
