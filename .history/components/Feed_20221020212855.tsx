import React,{useState} from 'react'
import {RefreshIcon} from "@heroicons/react/outline"
import TweetBox from './TweetBox'
import {Tweet} from "../typings"
import TweetComponent from "../components/TweetComponent"
import {fetchTweets} from "../utils/fetchTweets"
import toast from 'react-hot-toast'


interface Props{
    tweets: Tweet[]
}

export default function Feed({tweets:tweetsProp}:Props) {
    const [tweets,setTweets] = useState<Tweet[]>(tweetsProp)
    //console.log(tweets)
    const handleRefresh = async () => {
        const refreshToast = toast.loading("Refreshing...")
        const tweets = await fetchTweets()
        setTweets(tweets)
        toast.success("Feed Is Up",{
            id:refreshToast
        })
    }
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
        <div className="flex items-center justify-around">
            <h1 className="p-5 pb-0 text-white text-xl font-bold" >Home</h1>
            <RefreshIcon onClick={handleRefresh} className="h-8 w-8 cursor-pointer text-[#00ADED] mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "/>
        </div>
        <div>
            <TweetBox setTweets={setTweets} />
        </div>
        <div>
            {tweets.map((tweet) => (
               <TweetComponent key={tweet._id} tweet={tweet} /> 
            ))}
        </div>
    </div>
  )
}
