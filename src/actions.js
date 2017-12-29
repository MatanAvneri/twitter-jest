import { ADD_TWEET, RESET_TWEET } from './actionTypes'

export const postTweet = ({user, text}) => {
  const data = JSON.stringify({body: {user, text}})

  return (dispatch) => {
    fetch('http://localhost:5000/tweets', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(() => {
        dispatch(addTweet({user, text}))
      })
  }
}

export const getTweets = () => {
  return (dispatch) => {
    return fetch('http://localhost:5000/tweets')
      .then(response => {
        return response.json()
      })
      .then(tweets => {
        dispatch(resetTweets(tweets))
      })
  }
}

export const resetTweets = (tweets) => {
  return {
    type: RESET_TWEET,
    payload: {
      tweets
    }
  }
}

export const addTweet = ({user, text}) => {
  return {
    type: ADD_TWEET,
    payload: {
      user,
      text
    }
  }
}
