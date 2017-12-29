import React, { Component } from 'react'
import Tweet from './Tweet'
import './Feed.css'

import {connect} from 'react-redux'
import * as actions from './actions'

class Feed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      text: '',
      feed: []
    }
  }

  componentDidMount () {
    // this.props.getTweets()
  }

  // addTweet = () => {
  //   const {user, text} = this.state
  //
  //   this.props.addTweet({user, text})
  //   // this.props.postTweet({user, text})
  // }

  addTweet = () => {
    const {feed, user, text} = this.state

    this.setState({
      feed: feed.concat({user, text}),
      user: '',
      text: ''
    })
  }

  functionToTest () {
    return 'manor'
  }

  changeUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    const {user, text, feed} = this.state
    // const {feed} = this.props
    return (
      <div className='feed'>
        {
          feed.map(({user, text}) => {
            return <Tweet
              key={`${user}_${text}`}
              user={user}>
              {text}
            </Tweet>
          })
        }
        <div className='new-tweet-row'>
          <textarea placeholder='user' value={user} onChange={this.changeUser} className='userTweet'/>
          <textarea placeholder='whats happening' value={text} onChange={this.changeText} className='textTweet'/>
          <button className='new-tweet-row__button' onClick={this.addTweet}>Tweet</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed
  }
}

const mapDispatchToProps = {
  ...actions
}

export default Feed
// export default connect(mapStateToProps, mapDispatchToProps)(Feed)