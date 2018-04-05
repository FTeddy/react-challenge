import React from 'react'
import { connect } from 'react-redux'

class ErrorLoad extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <div className="content">
            <h1>{ this.props.err }</h1>
            <h2>Data retrieval failed.</h2>
          </div>
        </div>
        <div className="column is-3"></div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    err: state.err,
  }
}

export default connect(stateToProps, null)(ErrorLoad);
