import type { NextApiRequest,NextApiResponse } from "next";
import {TweetBody} from "../../typings"





type Data = {
    name: string
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
    res.status(200).json({name:"John"})
}