import React from 'react'
import { Route } from 'react-router-dom';
import SearchForm from './SearchForm'
import HeadlineQueryList from './HeadlineQueryList';
import axios from 'axios';

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      search: '',
      err: '',
      newsLook: []
    }
  }

  searchNews = (query) => {
    let url = 'https://newsapi.org/v2/everything?' +
      `q=${query}&` +
      'sortBy=relevancy&' +
      'apiKey=7680942fa076452ab0671b9ef5516074';
    axios.get(url).then(response => {
      this.setState({
        newsLook: response.data.articles
      })
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
