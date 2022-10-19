import React , {useState,useEffect} from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {ChatAlt2Icon,HeartIcon,SwitchHorizontalIcon,UploadIcon} from "@heroicons/react/outline"
import {fetchComments} from "../utils/fetchComments"


interface Props {
  tweet: Tweet;
}

function TweetComponent({ tweet }: Props) {
  const [comments,setComments] = useState<Comment[]>([])
  const refreshComments = async () => {
    const comments : Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }
  useEffect(() => {
    refreshComments()
  },[])
  console.log(comments)
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
            <TimeAgo
              className="text-sm text-gray-5000"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && <img className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm" src={tweet.image} alt=""/>}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer space-x-3 items-center text-gray-400" ><ChatAlt2Icon className="h-5 w-5"/><p>5</p></div>
        <div className="flex cursor-pointer space-x-3 items-center text-gray-400" ><HeartIcon className="h-5 w-5"/></div>
        <div className="flex cursor-pointer space-x-3 items-center text-gray-400" ><SwitchHorizontalIcon className="h-5 w-5"/></div>
        <div className="flex cursor-pointer space-x-3 items-center text-gray-400" ><UploadIcon className="h-5 w-5"/></div>
      </div>
      {comments?.length > 0 && (
        <div>
          {comments.map(comment => (
            <div key={comment._id}>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TweetComponent;
