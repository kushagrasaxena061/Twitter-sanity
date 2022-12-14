import React from 'react'
import {BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon,HomeIcon} from "@heroicons/react/outline"
import SidebarRow from "./SidebarRow"

export default function Sidebar() {
  return (
    <div className="flex flex-col ">
        <img className="h-10 w-10 " src="https://links.papareact.com/drq" alt="Not available"/>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow Icon={UserIcon} title="Sign In"/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}
