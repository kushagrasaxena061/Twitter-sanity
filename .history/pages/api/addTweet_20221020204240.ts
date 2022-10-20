import type { NextApiRequest,NextApiResponse } from "next";
import {TweetBody} from "../../typings"


type Data = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const data : TweetBody = JSON.parse(req.body)
    const mutations = {
        mutations: [
            {
                create:{
                    _type:'tweet',
                    text: data.text,
                    username: data.username,
                    blockTweet:false,
                    profileImg:data.profileImg,
                    image:data.image

                }
            }
        ]
    }  
    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2022-10-19/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
    
    res.status(200).json({message:"Added"})
}