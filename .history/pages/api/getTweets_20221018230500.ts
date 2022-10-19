import React from 'react'
import type { NextApiRequest,NextApiResponse } from "next";

type Data = { 
    name: string
}


export default function getTweets() {
  req: NextApiRequest,
  res: NextApiResponse<Data>
} {
    res.status(200).json({name:"John"})
}
