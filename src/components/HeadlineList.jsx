import React from 'react'
import { connect } from 'react-redux'
import 'bulma/css/bulma.css'
import logo from '../logo.svg';
import '../helper.css'

import ErrorLoad from './ErrorLoad.jsx'

class HeadlineList extends React.Component {
  render () {
    if (this.props.err) {
        return (
          <ErrorLoad />
        )
    } else {
      return (
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            {
              this.props.isLoading === false ?
              this.props.newsArs.map((news, i) => (
                <div key={ i } className="box">
                  <div className="content">
                    <a href={ news.url }>
                      <div className="parent">
                        <img src={ news.urlToImage } alt={ news.title } className="image child" />
                      </div>
                    </a>
                    <a href={ news.url } className="has-text-left"><h4 className="xshort">{ news.title }</h4></a>
                    <div className="has-text-justified xshort">
                      <p>{ news.description }</p>
                      <small className="is-uppercase">{ news.author }</small>
                      <small> @ { news.source.name } </small>
                      <small>
                        { new Date(news.publishedAt).getDate() }/
                        { new Date(news.publishedAt).getMonth()+1 }/
                        { new Date(news.publishedAt).getFullYear() }
                      </small>
                    </div>
                  </div>
                </div>
              ))  : <img src={logo} className="App-logo" alt="logo" />
            }
          </div>
          <div className="column is-3"></div>
        </div>
      )
    }
  }
}

const stateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    err: state.err,
    newsArs: state.newsArs,
    newsSearch: state.newsSearch
  }
}

export default connect(stateToProps, null)(HeadlineList);
