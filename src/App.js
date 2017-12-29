import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import AppReducer from './appReducer'

import './App.css'
import Feed from './Feed'

const store = createStore(
  AppReducer,
  applyMiddleware(thunk)
)

class App extends Component {
  render () {
    return (
      <div className='app-wrapper'>
        <Provider store={store}>
          <Feed/>
        </Provider>
      </div>
    )
  }
}

export default App
