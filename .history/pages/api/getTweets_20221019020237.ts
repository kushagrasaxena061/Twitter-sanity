import React from 'react'
import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"
import {Tweet} from "../../typings"
import {groq} from "next-sanity"

const FeedQuery = groq`
    *[_type == 'tweet' && !blockTweet]{
    _id,
    ...
    } | order(_createdAt desc)
`

type Data = { 
    tweets: Tweet[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const tweets: Tweet[] = await sanityClient.fetch{FeedQuery};
    console.log(tweets)
    res.status(200).json({tweets})
}

