import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet:Tweet
}

function Tweet({tweet}:Props) {
  return (
    <div>
        <img src={tweet.profileImg} alt="" />
        <div>
            <div>
                <p>{tweet.username}</p>
            </div>
        </div>
    </div>
  )
}

export default Tweet