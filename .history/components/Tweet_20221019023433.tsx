import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet:Tweet
}

function Tweet({tweet}:Props) {
  return (
    <div>
        <img src={tweet.profileImg} alt="" />

    </div>
  )
}

export default Tweet