import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";

interface Props {
  tweet: Tweet;
}

function TweetComponent({ tweet }: Props) {
  return (
    <div>
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 object-cover rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt=""
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <TimeAgo
              className="text-sm text-gray-5000"
              date={tweet._createdAt}
            />
          </div>
          <p>{tweet.text}</p>
        </div>
      </div>
    </div>
  );
}

export default TweetComponent;
