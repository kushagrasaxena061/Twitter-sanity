import React from 'react'
import {BellIcon,HashtagIcon,BookmarkIcon,CollectionIcon,DotsCircleHorizontalIcon,MailIcon,UserIcon,HomeIcon} from "@heroicons/react/outline"
import SidebarRow from "./SidebarRow"
import {signIn,signOut,useSession} from "next-auth/react"


export default function Sidebar() {
  const {data:session} = useSession()
  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start overflow-y-hidden">
        <img className="m-3 h-10 w-10 " src="https://links.papareact.com/drq" alt="Not available"/>
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={MailIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={CollectionIcon} title="Lists"/>
        <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session? 'Sign Out': 'Sign In'} />
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  )
}
