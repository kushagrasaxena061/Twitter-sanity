import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"
import {TweetBody} from "../../typings"
import {groq} from "next-sanity"
import {Comment} from "../../typings"

const commentQuery = groq`
    *[_type == 'comment' && references(*[_type=="tweet" && _id == $tweetId]._id){
    _id,
    ...
    } | order(_createdAt desc)
`


type Data = Comment[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const data : TweetBody = JSON.parse(req.body)
    res.status(200).json(comments)    
}