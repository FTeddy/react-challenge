
// ACTIONS
export function getNewsArsRdx (news) {
  return {type: 'GET_NEWS', payload: news}
}

export function getNewsSearchRdx (newsSearch) {
  return {type: 'SEARCH_NEWS', payload: newsSearch}
}

// REDUCERS
export function reducer (state={
  newsArs: [],
  newsSearch: []
}, action) {
  if (action.type === 'GET_NEWS') {
    return {...state, newsArs: action.payload}
  } else if (action.type === 'SEARCH_NEWS') {
    return {...state, newsSearch: action.payload}
  }
}

// STORE
// import { createStore } from 'redux'
// const store = createStore(reducer)


// Imports
  // Actions
  // import { getNewsArsRdx } from '../redux/index.js'
  // import { getNewsSearchRdx } from '../redux/index.js'

  // reducers
  // import { reducer } from '../redux/index.js'
