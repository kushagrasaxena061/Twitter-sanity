import React from 'react'
import {CalendarIcon,EmojiHappyIcon,LocationMarkerIcon,PhotographIcon,SearchCircleIcon} from "@heroicons/react/outline"


export default function TweetBox() {
  return (
    <div>
        <img className="h-14 w-14 object-cover rounded-full mt-4" src="https://links.papareact.com/gll" alt=""/>
        <div>
            <form>
                <input type="text" placeholder="What's Happening?"/>
                <div className="flex items-center ">
                    <div className="flex flex-1 space-x-2 text-[#00ADED]">
                        <PhotographIcon className="h-5 w-5"/>
                        <SearchCircleIcon className="h-5 w-5"/>
                        <EmojiHappyIcon className="h-5 w-5"/>
                        <CalendarIcon className="h-5 w-5"/>
                        <LocationMarkerIcon className="h-5 w-5"/>
                    </div>
                    <button className="bg-[#00ADED] px-5 py-2 font-bold text-white rounded-full">Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}
