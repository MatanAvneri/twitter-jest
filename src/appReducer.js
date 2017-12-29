import {ADD_TWEET, RESET_TWEET} from './actionTypes'

const initialState = {
  user: '',
  text: '',
  feed: []
}

const actionsMap = {
  [ADD_TWEET]: (prevState, {payload}) => {
    return Object.assign({}, prevState, {
      feed: prevState.feed.concat(payload)
    })
  },
  [RESET_TWEET]: (prevState, {payload}) => {
    const {tweets} = payload
    return Object.assign({}, prevState, {
      feed: prevState.feed.concat(...tweets)
    })
  }
}

const reducer = (prevState = initialState, action) => {
  const actionFunction = actionsMap[action.type]
  if (actionFunction) {
    return actionFunction(prevState, action)
  } else {
    return prevState
  }
}

export default reducer