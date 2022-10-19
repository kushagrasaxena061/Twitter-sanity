import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"
import {Tweet} from "../../typings"
import {groq} from "next-sanity"
import {Comment} from "../../typings"

const commentQuery = groq`
    *[_type == 'comment' && references(*[_type=="comment" && _id == $tweetId]._id){
    _id,
    ...
    } | order(_createdAt desc)
`


type Data = Comment[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const tweets: Tweet[] = await sanityClient.fetch("")
    console.log(tweets)
    res.status(200).json({tweets})    
}