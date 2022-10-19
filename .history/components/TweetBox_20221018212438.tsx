import React from 'react'
import {CalendarIcon,EmojiHappyIcon,LocationMarkerIcon,PhotographIcon,SearchCircleIcon} from "@heroicons/react/outline"


export default function TweetBox() {
  return (
    <div className="flex space-x-2 p-5">
        <img className="h-14 w-14 object-cover rounded-full mt-4" src="https://links.papareact.com/gll" alt=""/>
        <div className="flex flex-1 items-center pl-2 ">
            <form className="flex-1 flex flex-col">
                <input className="h-24 w-full text-xl outline-none placeholder:text:xl" type="text" placeholder="What's Happening?"/>
                <div className="flex items-center ">
                    <div className="flex flex-1 space-x-2 text-[#00ADED]">
                        <PhotographIcon className="h-5 w-5 space-x-2"/>
                        <SearchCircleIcon className="h-5 w-5 space-x-2"/>
                        <EmojiHappyIcon className="h-5 w-5 space-x-2"/>
                        <CalendarIcon className="h-5 w-5 space-x-2"/>
                        <LocationMarkerIcon className="h-5 w-5 space-x-2"/>
                    </div>
                    <button className="bg-[#00ADED] px-5 py-2 font-bold text-white rounded-full">Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}
