import {Tweet} from "../typings"

export const fetchTweets = async () => {
    const res = await fetch("http://localhost:3000/api/get/Tweets")
    const data = await res.json()
    const tweets: Tweet[] = data.tweets
    return tweets
}