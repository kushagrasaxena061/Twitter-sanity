import React from 'react'
import {BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon,HomeIcon} from "@heroicons/react/outline"
import SidebarRow from "./SidebarRow"

export default function Sidebar() {
  return (
    <div>
        <img className="h-10 w-10" src="https://links.papareact.com/drq" alt="Not available"/>
        <SidebarRow Icon={HomeIcon} title="Home"/>
    </div>
  )
}
