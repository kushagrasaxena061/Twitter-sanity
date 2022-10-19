import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";

interface Props {
  tweet: Tweet;
}

function TweetComponent({ tweet }: Props) {
  return (
    <div className="flex flex-col space-x-3 p-5 border-y border-gray-100">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt=""
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
            <TimeAgo
              className="text-sm text-gray-5000"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && <img className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm" src={tweet.image} alt=""/>}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default TweetComponent;
