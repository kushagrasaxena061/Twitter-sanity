import React from 'react'
import {Tweet} from '../typings'
import Timeago from "react-timeago"



interface Props {
    tweet:Tweet
}

function TweetComponent({tweet}:Props) {
  return (
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" />
        <div>
            <div className='flex items-center'>
                <p>{tweet.username}</p>
                <TimeAgo className="text-sm text-gray-5000" date={tweet._createdAt} />
            </div>
        </div>
    </div>
  )
}

export default TweetComponent