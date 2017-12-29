import React from 'react'
import './Tweet.css'

const Tweet = ({user, children}) => {
  return (
    <div className='tweet'>
      <img className='tweet__image' src='https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_bigger.jpg'/>
      <div className='tweet__content'>
        <div className='tweet__content__user'>{user}</div>
        <div className='tweet__content__text'>{children}</div>
      </div>
    </div>
  )
}

Tweet.defaultProps = {
  user: 'Eli express'
}

export default Tweet