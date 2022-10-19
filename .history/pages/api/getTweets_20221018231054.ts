import React from 'react'
import type { NextApiRequest,NextApiResponse } from "next";
import {sanityClient} from "../../sanity.js"


type Data = { 
    name: string
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({name:"John"})
}

