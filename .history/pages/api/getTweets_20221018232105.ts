import React from 'react'
import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"
import {Tweet} from "../../typings"


type Data = { 
    tweets: Tweet[]
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({name:"John"})
}

