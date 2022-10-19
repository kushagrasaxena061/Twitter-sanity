import React from 'react'
import {Tweets} from '../typings'

interface Props {
    tweet:Tweet
}

export default function Tweet({tweet}:Props) {
  return (
    <div>
        <img src={tweet.profile.image} />
    </div>
  )
}
