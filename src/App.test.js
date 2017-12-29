import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Tweet from './Tweet'
import Feed from './Feed'

import Enzyme, { shallow, mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
// React 16 Enzyme adapter
Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)

  shallow(<App />)
})


test('renders without crashing Enzyme', () => {
  expect(() => shallow(<App />)).not.toThrow()
})

test('feed renders tweet', () => {
  const feedWrapper = shallow(<Feed />)
  expect(feedWrapper.find(Tweet).length).toEqual(0)
  const userInput = feedWrapper.find('.userTweet')
  const textInput = feedWrapper.find('.textTweet')
  const submitButton = feedWrapper.find('button')

  userInput.simulate('change',  {target: {value: 'My new user'}})
  textInput.simulate('change',  {target: {value: 'My new text'}})
  submitButton.simulate('click')
  expect(feedWrapper.find(Tweet).length).toEqual(1)


  expect(feedWrapper.state()).toEqual({
    user: '',
    text: '',
    feed: [{user: 'My new user', text: 'My new text'}]
  })

  expect(feedWrapper.instance().functionToTest()).toEqual('manor')
})

test('redux tests', () => {
  const {addTweet} = require('./actions')
  const reducer = require('./appReducer').default

  const expectedAction = {
    type: 'addTweet_tweetReducer',
    payload: {
      user: 'user1',
      text: 'text2'
    }
  }
  expect(addTweet({
    user: expectedAction.payload.user,
    text: expectedAction.payload.text
  })).toEqual(expectedAction)



  const action = {
    type: 'addTweet_tweetReducer',
    payload: {
      user: 'user1',
      text: 'text2'
    }
  }
  const reducedState = reducer({feed: []}, action)
  expect(reducedState).toEqual({
    feed: [{
      user: 'user1',
      text: 'text2'
    }]
  })
})

















