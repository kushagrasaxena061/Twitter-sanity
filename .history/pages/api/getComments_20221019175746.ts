import type { NextApiRequest,NextApiResponse } from "next";

type Data = { 
    tweets: Tweet[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const tweets: Tweet[] = await sanityClient.fetch("")
    console.log(tweets)
    res.status(200).json({tweets})    
}