import React from 'react'
import { SearchCircleIcon } from '@heroicons/react/outline'
import {TwitterTimelineEmbed} from "react-twitter-embed"

export default function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
        <div className="flex items-center space-x-2 mb-8 p-3 rounded-full mt-2 ">
            <SearchCircleIcon className="h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search" className="flex-1 outline-none bg-transparent"/>
        </div>
        <div className="bg-black">
        <TwitterTimelineEmbed sourceType="profile" screenName="Kushagra" options={{height:1000}}/>
        </div>
    </div>
  )
}
