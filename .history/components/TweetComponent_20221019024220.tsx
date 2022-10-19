import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet:Tweet
}

function Tweet({tweet}:Props) {
  return (
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
        <div>
            <div>
                <p>{tweet.username}</p>
            </div>
        </div>
    </div>
  )
}

export default Tweet