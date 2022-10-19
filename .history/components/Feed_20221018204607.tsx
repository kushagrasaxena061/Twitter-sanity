import React from 'react'
import {RefreshIcon} from "@heroicons/react/outline"

export default function Feed() {
  return (
    <div className="col-span-5">
        <div className="flex items-center justify-around">
            <h1 className="p-5 pb-0 text-xl font-bold" >Home</h1>
            <RefreshIcon className="h-8 w-8 cursor-pointer text-[#00ADED] mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "/>
        </div>
    </div>
  )
}
