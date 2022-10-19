import React from 'react'



interface Props{
    Icon: () => {}
    title:String
}

export default function SidebarRow(Icon, title): Props {
  return (
    <div>
      <Icon/>
      
    </div>
  )
}
