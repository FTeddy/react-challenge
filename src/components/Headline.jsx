import React, { Component } from 'react'
import axios from 'axios'
import HeadlineList from './HeadlineList'

import { createStore } from 'redux'
import { getNewsArsRdx, reducer } from '../redux/index.js'
const store = createStore(reducer)

class Headline extends Component {
  constructor () {
    super()
    this.state = {
      newsArs: [],
      err: ''
    }
  }

  componentDidMount() {
    this.getNewsArs()
    store.subscribe(() => {
      // console.log(store.getState());
      this.setState({
        newsArs: store.getState().newsArs
      })
    })
  }

  getNewsArs = () => {
    console.log('hello?');
    let url = 'https://newsapi.org/v2/top-headlines?'
      + 'sources=ars-technica&'
      + 'apiKey=7680942fa076452ab0671b9ef5516074'
    axios.get(url).then(response => {
      store.dispatch(getNewsArsRdx(response.data.articles))
    }).catch(err => {
      this.setState({
        err: err.message
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Ars Technica News</h1>
        <h2>{ this.state.err }</h2>
        <HeadlineList newsSource={ this.state.newsArs }></HeadlineList>
      </div>
    );
  }
}

export default Headline;
