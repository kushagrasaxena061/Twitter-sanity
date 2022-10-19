import React from 'react'
import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"
import {Tweet} from "../../typings"
import {groq} from "next-sanity"

const feedQuery = groq`
    *[_type == 'tweet' && !blockTweet]{
    _id,
    ...
    } | order(_createdAt desc)
`

tfype Data = { 
    tweets: Tweet[]
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({name:"John"})
}

